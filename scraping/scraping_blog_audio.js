var request = require('request');
var cheerio = require('cheerio');

website = "http://nhacvietplus.com.vn/";
url = "http://nhacvietplus.com.vn/Blog-Radio/97/265/287/";
audio_type = 'blog_radio';

// Loop for each page contains list blog radio
function scrapingPage(page)
{
	if (!page)
	{
		page = 1;
	}

	pageUrl = url + page;
	console.log("prepare to request page  "+page);
	request(pageUrl, function(error, response, html){
		
		if (!error)
		{
			$ = cheerio.load(html);
			is_blog_exist = 0;
			$('.left_small_news_hot_eva a').each(function() {
			    data = $(this);
			    blog_audio_url = data.attr('href');
			    img_element = data.find('img');
			    imgUrl = img_element.attr('src');
			    name = img_element.attr('alt');
			    console.log("\nblog_audio_url:"+blog_audio_url);
			    console.log("\nimgUrl:"+imgUrl);
			    console.log("\nname:"+name);

			    Audio.findAudio(name, imgUrl, blog_audio_url, audio_type, function(name, imgUrl, blog_audio_url, result){
				//console.log("\n-------name;;="+name);
				if (!result)
					scrapingBlogAudio(name, imgUrl, blog_audio_url);
			    });
			    is_blog_exist = 1;
			});
			//console.log("html:"+$);
			if (is_blog_exist)
				scrapingPage(page+1);
			else
				console.log("Dont have any blog radio in page "+page);
			console.log("Finish request page  "+page);
			
		}
		else
		{
			console.log("error when request page  "+ error);
		}
	});
		
	console.log("Finish scraping page list audio blog::"+page);
}

function scrapingBlogAudio(name, imgUrl, url)
{
	url = website+url;
	console.log("Scraping audio link from "+url);
	request(url, function(error, response, html){
		if (!error)
		{
			$ = cheerio.load(html);
			raw_audioUrl = $('#player_music object').children().last().attr('value');
			audioUrl = parse_audio_url(raw_audioUrl);
			pos = get_pos_from_name(name);
			
			Audio.createAudio(name, url, imgUrl, audioUrl, audio_type, pos, function(result){
				console.log("createAudio result: "+ result);		
			});
			console.log("audio url:"+ audioUrl);
		}
	})
	
}

//parse audio url from link in web
function parse_audio_url(url)
{
	if (url){
		arr = url.split('&');
		file = arr[0].slice(5);
		stream =arr[1].slice(9);
		audioUrl = stream + "/mp3:" + file;
		//console.log("audio url:"+ audioUrl);
		return audioUrl;
	}
	return "";
	
}

function get_pos_from_name(name)
{
	name = name.slice(11);//Remove string "Blog radio"
	pos = name.slice(0, name.indexOf(':'));
	return pos;
}

exports.scrapingPage = scrapingPage;
