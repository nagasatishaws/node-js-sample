var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('HI THIS IS NAGASATISH,AWS SOLUTION ARCHITECT ASSOSIATE...COURSE CONTENT ....ec2,vpc,rds,ses,sns,iam,cft,elb,ebs,firewall,waf,codebuild,codepipeline,codecommit,ecs,ecr,fargate,awsbackup,route53,clouwatch,cloudtrail,s3...')
}) 

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
