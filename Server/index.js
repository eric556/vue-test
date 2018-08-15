var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors());
app.use(bodyParser.json())


var projectList = {
    projects: [
        {
            id: 1,
            title: "Test 1",
            description: "Vero exerci atomorum his an. Ne sed quem case civibus, id idque aeque alterum nec, at sit nonumy sanctus omittantur. Pri nemore tamquam ut. Pri unum timeam hendrerit eu, no vix viris phaedrum consectetuer, id vel gubergren definiebas sadipscing. Consulatu sententiae comprehensam cu vel. Vitae aperiri et his, ne usu.",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "## Test 1"
        },
        {
            id: 2,
            title: "Test 2",
            description: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "### Test 2"            
        },
        {
            id: 3,
            title: "Test 3",
            description: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "#### Test 3"            
        },
        {
            id: 4,
            title: "Test 4",
            description: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "##### Test 4"            
        },
        {
            id: 5,
            title: "Test 5",
            description: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
            tags: [
                {
                    name: "tag1"
                },
                {
                    name: "tag2"
                }
            ],
            readme: "###### Test 5"
        },
    ]
}

var next_id = 6

app.get('/projects', function(req, res){
    res.json(projectList.projects);
})

app.get('/projects/:id', function (req, res) {
    res.json(projectList.projects.find(project => {
        return project.id == req.params.id;
    }));
})

app.get('/nextid', (req, res) => {
    res.json({nextid: next_id});
    next_id++;
});

app.put('/projects/:id', function(req, res){
    var item = projectList.projects.find(project => {
        return project.id == req.params.id;
    });
    var index = projectList.projects.indexOf(item)
    projectList.projects[index] = req.body;
    res.send("thanks!")
})

app.post('/projects/:id', function(req, res){
    projectList.projects.push(req.body);
    res.send("thanks!")
})

app.listen(3000);
console.log("listening on: 3000")