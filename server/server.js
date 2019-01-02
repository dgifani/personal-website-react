const https = require('https');
const fs = require('fs');
const http = require('http');
const parseString = require('xml2js').parseString;

const MEDIUM_URL = 'https://medium.com/feed/@yourID';
const WEBSITE_URL = 'http://example.com';


http.createServer((request, response) =>{
    console.log(request.method, request.url)
    
    const headers = {        
        "Access-Control-Allow-Origin" : WEBSITE_URL,
        'Access-Control-Allow-Methods': 'OPTIONS, GET',
        'Access-Control-Max-Age': 1000, 
        'Access-Control-Allow-Headers':  'Accept, Cache-Control, Content-Type, Authorization, Content-Length, X-Requested-With'
      };
    
      if (request.method === 'OPTIONS') {
            response.writeHead(204  , headers);
            response.end();
            return;
      }

    
      if (['GET'].indexOf(request.method) > -1) {

        if(request.url === "/stories"){     
        
            https.get(MEDIUM_URL, (res) =>  mediumData(res, (err, result)=> {
    
                if(err){
                    console.log("err:", err)
                    response.writeHead(500  , headers);
                    response.write("err:"+ err)
                    response.end();
                    return
                }
                response.writeHead(200  , headers);
                response.write(JSON.stringify(result))
                response.end();
                return
    
            })).on('error', (e) => {
                response.writeHead(500  , headers);
                response.write("err:"+ err)
                response.end();
                console.error(`Got error: ${e.message}`);
                return
              });
       }else{
        
        response.writeHead(405, headers);
        response.end(`${request.method} is not allowed for the request.`);
      }
      } else{
        
        response.writeHead(405, headers);
        response.end(`${request.method} is not allowed for the request.`);
      }
    
}).listen('8000').on('listening', () => console.log('server runing on port 8000 '))



function mediumData(res, cb){
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
  
    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^text\/xml/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/xml but received ${contentType}`);
    }
    if (error) {
      cb(error)  
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }
  
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = parseString(rawData, function (err, result) {

            if(result && result.rss && result.rss.channel.length > 0 ){
            
                var input = result.rss.channel[0] ;
                var output = {};
                
                output['title'] = input.title[0] ? input.title[0] : "" ;
                output['description'] =  input.description[0] ?  input.description[0] : "";
                output['link'] = input.link[0] ? input.link[0] : "";
                //output['image'] = input.image[0] ? input.image[0] : "";
                output['items'] = input.item.map((story) => {
                    var storyItem = {};
                    storyItem['title'] = story.title[0] ? story.title[0] : "" ;
                    storyItem['link'] = story.link[0] ? story.link[0] : "" ;
                    storyItem['category'] = story.category ? story.category : [] ;
                    storyItem['pubDate'] = story.pubDate[0] ? story.pubDate[0] : "" ;

                    return  storyItem;
                })

                cb(null, output);
                
            }else{
                cb({error : "no data"})
            }
        });
      } catch (e) {
        cb(e);  
        console.error(e.message);
      }
    });
  }       
