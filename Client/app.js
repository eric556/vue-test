
document.addEventListener('DOMContentLoaded', function() {
    //var elems = document.querySelectorAll('.sidenav');
    //var instances = M.Sidenav.init(elems, {});
    M.AutoInit();
});


var navComp = {
    template: `
        <nav class="blue-grey">
            <div class="nav-wrapper blue-grey container">
                <a href="#!" class="brand-logo blue-grey center">Logo</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                    <i class="material-icons">menu</i>
                </a>
                <form class="right hide-on-small-and-down">
                    <div class="input-field">
                        <input id="search" type="search" required>
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
                <ul class="left hide-on-med-and-down">
                    <li>
                        <router-link to="/home">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/create">Create</router-link>
                    </li>
                </ul>

            </div>
            <ul class="sidenav" id="mobile-demo">
                <li class="blue-grey">
                    <a href="#" class="white-text">Logo</a>
                </li>
                <li>
                    <router-link to="/home">Home</router-link>
                </li>
                <li>
                    <router-link to="/create">Create</router-link>
                </li>
                <!--<li>
                    <form>
                        <div class="input-field">
                            <input id="search_side" type="search" required>
                            <label class="label-icon" for="search_side"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                </li>-->
            </ul>
        </nav>

    `
}

var cardRevealComp = {
    props:['title', 'content'],
    template: `
        <div class="card-reveal">
            <span class="card-title">{{title}}<i class="material-icons right">close</i></span>
            <p>{{content}}</p>        
        </div>
    `
}

var sectionComp = {
    template:`
        <div class="section">
            <slot></slot>
        </div>
    `
}

var dividerComp = {
    template: `
        <div class="divider"></div>
    `
}

var chipComp = {
    props:['text'],
    template: `
        <div class="chip"">
            {{text}}
        </div>
    `
}

var cardComp = {
    template: `
        <div class="card small blue-grey darken-1">
            <slot></slot>
        </div>
    `
}

var cardContentComp = {
    template: `
        <div class="card-content white-text">
            <slot></slot>
        </div>
    `
}

var cardActionComp = {
    template: `
        <div class="card-action">
            <slot></slot>
        </div>
    `
}

var projectCardComp = {
    props:['project'],
    computed:{
        shortDescription: function(){
            return this.project.description.substr(0,100) + "\u2026";
        },
        projectLink: function(){
            return "/project/" + this.project.id;
        }
    },
    components: {
        'card': cardComp,
        'card-content': cardContentComp,
        'card-action': cardActionComp,
        'card-reveal': cardRevealComp,
        'chip': chipComp
    },
    template:`
        <div class="col s12 m4 l3">
            <card>
                <card-content>
                    <span class="card-title activator">{{project.title}}<i class="material-icons right">more_vert</i></span>
                    <p>{{shortDescription}}</p>
                </card-content>
                <card-content>
                    <chip v-for="tag in project.tags.slice(0,2)" :text="tag.name"></chip>
                </card-content>
                <card-action>
                    <router-link :to="projectLink">Go to project</router-link>                
                </card-action>
                <card-reveal :title="project.title" :content="project.description"></card-reveal>
            </card>
        </div>
    `
}

var projectPageComp = {
    props: ['creation'],
    created: function () {
        console.log(this.creation);
        if(!this.creation){
            this.fetchProject();
        }
    },
    mounted: function(){
        this.simplemde = new SimpleMDE({element: document.getElementById("readmeEditor")})
    },
    updated: function(){
        // because materialize is stupid
        var unorderedLists = document.getElementById("readmeDiv").querySelectorAll('ul');
        console.log(unorderedLists)
        unorderedLists.forEach( element => {
            element.classList.add("browser-default");
        });
    },
    computed: {
        id (){
            return this.$route.params.id;
        },
        canEdit(){
            return true;
        },
        compiledMarkdown(){
            return marked(this.project.readme, {sanitize: true})
        }
    },
    methods: {
        toggleEdit(){
            this.editing = !this.editing
            
            if(this.creation && !this.editing){
                axios.get("http://localhost:3000/nextid").then(response => {
                    this.project.id = response.data.nextid;
                    this.project.readme = this.simplemde.value()
                    axios.post("http://localhost:3000/projects/" + this.project.id, this.project).then(response => {
                        console.log(response);
                        router.push({path: '/project/' + this.project.id});
                    }).catch(error => {
                        console.log("ERROR")
                        console.log(error);
                    })
                });
            }else{
                if(!this.editing){
                    this.project.readme = this.simplemde.value()
                    axios.put("http://localhost:3000/projects/" + this.project.id, this.project).then(response => {
                        console.log(response);
                    }).catch(error => {
                        console.log("ERROR")
                        console.log(error);
                    })
                }else{
                    M.textareaAutoResize(document.getElementById("descriptionEditor"))
                    this.simplemde.value(this.project.readme);
                }
            }
            
        },
        empty(str){
            return str === "";
        },
        fetchProject(){
            axios.get("http://localhost:3000/projects/" + this.id).then(response => {
                this.project = response.data;
            })
        }
    },
    data: function() {
        return {
            editing: false,
            project: {
                id: -1, 
                title: "", 
                description: "",
                readme: "",
                tags: []
            },
            simplemde: null
        };
    },
    components: {
        "divider": dividerComp,
        "sect": sectionComp,
    },
    template:`
        <div>
            <div>
                <a class="btn-floating btn-large waves-effect waves-light red right" v-if="canEdit" v-on:click="toggleEdit()"><i class="material-icons">edit</i></a>
                <h3 v-if="!editing || !canEdit">{{project.title}}</h3>
                <textarea v-show="editing && canEdit" v-model="project.title" id="titleEditor" class="materialize-textarea"></textarea>
            </div>
            <divider/>
            <sect>
                <h5>Description</h5>
                <p v-if="!editing || !canEdit">{{project.description}}</p>
                <textarea v-show="editing && canEdit" v-model="project.description" id="descriptionEditor" class="materialize-textarea"></textarea>
                <p v-if="empty(project.description) && !editing">No description</p>
            </sect>
            <divider/>
            <sect>
                <div v-show="!editing" id="readmeDiv" v-html="compiledMarkdown"></div>
                <div v-show="editing && canEdit">
                    <textarea id="readmeEditor"></textarea>                
                </div>
                <p v-if="empty(project.readme) && !editing">Readme is empty</p>
            </sect>
        </div>
    `
}

var homePageComp = {
    data: function(){
        return {
            projects: []
        }
    },
    created: function(){
        this.fetchProjects();
    },
    methods: {
        fetchProjects(){
            axios.get("http://localhost:3000/projects").then(response => {
                this.projects = response.data;
            })
        }
    },
    components: {
        'project-comp': projectCardComp
    },
    template:`
        <div class="row" >
            <project-comp v-for="project in projects" v-bind:project="project"></project-comp>
        </div>
    `,
}

const routes = [
    { path: '/', component: homePageComp },
    { path: '/home', component: homePageComp },
    { path: '/project/:id', component: projectPageComp, props: {creation: false} },
    { path: '/create', component: projectPageComp, props: {creation: true} },

]

const router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    el: '#app',
    components: {
        'nav-comp': navComp,
    }
})