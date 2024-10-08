const id = "posts/2018-11-22-improved-job-scheduling.md";
						const collection = "docs";
						const slug = "posts/2018-11-22-improved-job-scheduling";
						const body = "\nBig clients with a lot of jobs. We've got a few, but weren't always happy with\nhow the jobboard looked. One Francesca's having a lot of jobs in a feed can make\nthe FashionUnited jobboard really look like a Francesca's jobboard instead.\n\nSo we decided to take action. We setup the jobboard so clients can only post 1\njob every 30 minutes per brand during working hours. Get it? 1 Francescas's\njob - wait 30 minutes - 1 Francesca's job - wait 30 minutes and so on. Within\nthat 30 minutes it's likely that another company also posts a job, and this is\nenough to prevent our jobboard to look like Francesca's jobboard.\n\nAll good, you'd think.\n\nBut then along came Nike. Over a 1000 jobs and they needed to go online ASAP.\nPeter managed to put everything online at once, but it took just 2 weeks before\nwe ran into trouble again.\n\n![job-list-nike](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/18ab3959-3919-4482-2533-a9633738c200/public \"Job list Nike, the new situation, CC courtesy of Joost van der Laan\")\n\nApparently, Nike \"updates\" all of it's jobs every few weeks with new ID's. No,\nnot new content, no new title, not extra details in the description. They\nchanged just the ID. Not really an update, is it? Well, we've seen this before.\nSome companies do this to trick other systems, for example to get jobs at the\ntop of the jobboard list. Sometimes it is just a limitation of their current ATS\nthat causes this. (Taleo in the case of Nike) As a result, hundreds of Nike jobs\n(the old ID's) went offline. At the same time the queue with jobs to post in the\nfuture started growing. Hundreds of jobs, to be posted in the coming months.\nYes, months. That's what happens when there's only 1 company posting. Since Nike\ncouldn't help this happening, we needed a fix.\n\nPeter set out on a journey, deep down into the core of our jobs platform while\nthousands of jobs where flying around his ears, to find a solution. He came up\nwith a revamped job scheduler, where we can publish lots of jobs, even within\nthose 30 minutes.\n\nIt works like this, taking Nike as an example:\n\nPosts every minute a maximum 20 jobs. (from any company) For Nike, no new job\nwill be posted within 30 min, if the previous job is also from Nike. But, once\nFrancesca's posts, a Nike job will be posted the next minute. (not waiting 30\nminutes) Therefore, as long as there is diversity in companies, we can post\norders of magnitude more jobs and the queue won't fill up until months into the\nfuture.\n\n![job-list-nike](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/18ab3959-3919-4482-2533-a9633738c200/public \"Job list Nike, the new situation, CC courtesy of Joost van der Laan\")\n";
						const data = {title:"Improved job scheduling!",description:"Getting jobs online faster, while not looking like a 'BrandX-only' jobboard",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/joost/git/developer.fashionunited.com/src/content/docs/posts/2018-11-22-improved-job-scheduling.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
