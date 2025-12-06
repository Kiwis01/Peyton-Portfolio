import { useState } from 'react'
import './BlogReports.css'

const BlogReports = () => {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([])

  const blogPosts = [
    {
      id: 1,
      title: "An Introduction",
      date: "August 2023",
      tags: ["Madrid", "First Impressions", "CIEE"],
      excerpt: "This semester, I am studying abroad in Madrid, a city that has been the cultural and political capital of Spain since the 16th century. My journey begins with learning to navigate this historic city and understanding its cultural landscape.",
      content: `
        <p>This semester, I am studying abroad in Madrid, a city that has been the cultural and political capital of Spain since the 16th century. Throughout history, Madrid has been settled by Romans, Moors, Visigoths, and other Western European groups, eventually being conquered by Christian forces in the 11th century. Naturally, the city has undergone numerous and vast transformations since this time, the legacies of which can be seen in Madrid's architectural and cultural landscape. Today, around a quarter of all Madrid residents originate from outside the city, a common characteristic among large urban areas in a globalized world.</p>
        
        <p>Upon arriving in Madrid, the exhaustion I'd expected to arrive in the form of culture shock was more a product of my effort to analyze native routines, to blend into local life. The city has a high transplant population, with a relatively large proportion of expatriate residents and an even larger percentage of otherwise non-natives, but I feared being perceived as a tourist throughout all three months of my stay. This was a self-consciousness that was not only borne out of anxiety but also a sense of cultural respect. My solution lies in the pursuit of knowledge: of learning through experience and educating myself on Madrileño norms and customs. One of my favorite opportunities for this self-driven process of discovery lies in my daily commute to class.</p>
        
        <p>My study abroad program is through CIEE, the Council for International Educational Exchange. As an American-based student program, it connects me to a network of peers that I can continue to build and utilize after the semester has ended. My classes are held at the CIEE Madrid location, a building near the Puerta del Sol hub in downtown Madrid. The organization invites local professors to teach students of various majors, providing a variety of class selections to assist in achieving our academic goals while abroad. The academic building also provides an advising office specifically tailored for the CIEE program, where students can seek guidance on anything ranging from course selections and credit fulfillment to local restaurant and sightseeing recommendations. My courses this semester include Global Environmental Policy and Media, Gender and Identity. These classes build on topics I've cultivated an interest in at my home university, focusing on the environmental and social issues present in global systems today. I'm especially excited to broaden my knowledge of these topics through the lens of Spanish educators, and look forward to learning more about these issues from a truly international perspective.</p>
      `
    },
    {
      id: 2,
      title: "Learning to Navigate the City",
      date: "September 2023",
      tags: ["Daily Life", "Metro", "Cultural Adaptation"],
      excerpt: "My first few weeks in Madrid were largely spent observing and learning. I observed how Madrileños navigate the city, and how the local routines differ from my own.",
      content: `
        <p>My first few weeks in Madrid were largely spent observing and learning. I observed how Madrileños navigate the city, and how the local routines differ from my own. I found the biggest differences to be based on these routines, in the daily scheduling of transportation, rest, and meals. Everyone takes the metro in Madrid, and most small shops close for siesta each day from 2:00 to 5:00 pm. Mealtimes, I knew, were typically later than in the States, but genuinely no Madrileno even thinks about dinner until 9:00 pm. Traveling by metro and on foot, I realize all that is missed while commuting in a car. When walking through a city, everyone is out in the open, exposed; it fosters a personal connection to a place and the people in it. You're forced to move at a slower pace, to take in the world around you instead of dismissing it on the way to the next. I've liked feeling more connected to the world around me, if only on a somewhat superficial level.</p>
        
        <p>Of course, these differences aren't without their downsides. It took two weeks for me to feel comfortable taking the metro alone without fearing getting lost in a time crunch, and a few more weeks after that to reliably exit the station where I'd planned to come out. I learned Google isn't always a reliable source for store hours, especially near the end of summer in Europe, when many shop owners are still on summer vacation at the coast. It was sometimes difficult to have an itinerary thrown off course in a city I wasn't familiar with, where every excursion seemed to require planning and preparedness. Before I left my apartment, I'd think about the interactions I might have and ensure I knew the Spanish phrases they'd involve. I quickly realized that my limited proficiency in Mexican Spanish wouldn't be much help communicating in Spain's Spanish. I became an active listener, not only in my own conversations but while overhearing others, constantly assessing my knowledge. I began working on the skill of wandering, an activity not highly valued by American culture but essential to exploring more slow-paced, pedestrian cities. I felt myself become more present, following my curiosity and bolstered by some newly acquired dialectical knowledge. As long as I made some effort to assimilate, I decided I was fine being considered a tourist; at least I wasn't a willfully ignorant one.</p>
      `
    },
    {
      id: 3,
      title: "A Weekend in Lisbon",
      date: "August 2023",
      tags: ["Travel", "Portugal", "Alfama", "Food"],
      excerpt: "Lisbon was one of my must-see destinations while studying abroad. I soon realized that I wasn't the only one in my program who wanted to visit, so I grabbed three new friends and booked a flight for the end of August.",
      content: `
        <p>Lisbon was one of my must-see destinations while studying abroad. I soon realized that I wasn't the only one in my program who wanted to visit, so I grabbed three new friends and booked a flight for the end of August. We planned to stay in Alfama, one of the oldest neighborhoods in Lisbon, as it was one of the only to survive a major earthquake in 1755 relatively unscathed. In line with its close geographical proximity to Madrid, Lisbon has a similar history of conquerors and kings. The city has been ruled by various groups over the centuries, including the Phoenicians, Romans, Germanic tribes, and the Moors, after which Portugal's first king conquered the city. Beyond these regime changes, diverse cultural influences have permeated Lisbon through historical trade routes and interactions with other Mediterranean hubs. I could sense the ancient nature of the city, apparent in the cobblestone streets and massive, intricate infrastructures. Portugal quickly became a country I knew I'd want to explore further, not only because of its history but because of the people who live there today. Locals are extremely friendly, and even strangers whom we initially viewed with some suspicion were ultimately well-intentioned.</p>
        
        <p>We arrived after dark on our first night in town and circled the block in search of our Airbnb, to no avail. Eventually, a middle-aged expat walking down the street overheard our confusion and offered to help us find the right building. When we dropped off our luggage and went off in search of food, the owners of a wine bar down the street saw us wandering and offered to make us sandwiches after-hours. Lisbon is known to be a friendly city, but I was surprised at how willingly people went out of their way to help strangers. Another major plus of visiting Lisbon is the cuisine. As a coastal city, most of the regional dishes involve seafood in some form or another, and I was ready to try them all. My favorite was a grilled octopus dish with sweet potato, accompanied by Portuguese vinho verde wine; I'm still amazed at how such a simple meal can be so delicious. The sea from which this food came was unlike any I'd ever seen, with rocky shorelines towering over crystal clear, if slightly frigid, waters. Most of Lisbon has been constructed around hilltops, naturally evolving to create scenic views around every corner. The only drawback is that discovering these sights often requires extensive hikes up slippery cobblestones, a definite hazard when walking home from dinner and drinks in sandals. After spending a weekend in the city, my only complaints were sore hamstrings and having to leave so soon.</p>
      `
    },
    {
      id: 4,
      title: "The Museums",
      date: "September 2023",
      tags: ["Art", "Museums", "Prado", "Cultural Heritage"],
      excerpt: "In all honesty, one of the aspects of European culture I was most excited to indulge in was the prevalence and prestige of various museums. Though it may sound pretentious, the value of fine art is more widely appreciated in Spain than in the US.",
      content: `
        <p>In all honesty, one of the aspects of European culture I was most excited to indulge in was the prevalence and prestige of various museums. Though it may sound pretentious, the value of fine art is more widely appreciated in Spain than in the US. It's not that Europeans have a greater sense of what art is, but centuries of tradition have worked to integrate it into the public sphere. Members of high society have long commissioned artworks for their personal domains, and the first museums in Madrid were established by royalty. The city now holds claim to a Golden Triangle of Art, also known as the Big Three: the Reina Sofia, the Thyssen-Bornemisza, and, of course, the Prado. My favorite of these is the Thyssen, a museum that holds one of the most extensive collections of 20th-century art in the city. Each Saturday, entrance to the museum is free after 9:00 pm, which I recently took advantage of to check out a temporary exhibition titled Terraphilia. When I arrived at 8:45, there was a line nearly around the block, imitating a nightclub entrance more than a museum. Although it was crowded, the exhibit was worth the wait. I took home two postcards from the gift shop featuring paintings I'd wanted to see for years and unexpectedly came in contact with that night.</p>
        
        <p>In addition to beautiful and world-renowned paintings, Madrid's museums house an array of historically significant artifacts that, in some ways, I was surprised to come across. Among these are Indigenous sculptures and pottery, selections of da Vinci's journals, and reproductions of manuscripts that explained Christian doctrines to conquered Mesoamerican tribes. In the Royal Gallery, I found 16th-century Flemish tapestries, tabernacles carved from precious stones, and massive vessels of Chinese porcelain that the Habsburg and Bourbon monarchies imported with zeal. My feelings regarding these collections are complicated, as I know the wealth that funded such artistic patronage was sourced from exploitation. In conquering the Americas, the Spanish monarchies appropriated vast supplies of silver and gold deposits, as well as the gold and precious stones stolen from the Aztec and Inca empires. Strict trade controls over colonial goods accompanied the establishment of New World colonies, directing profits from agricultural production back to Spain. This cultivation was made possible through oppressive systems of slavery, as the Crown exploited not only the land but the people who inhabited it. Without these factors, Spanish royalty would have lacked the extravagant wealth and resources required for the commission of such luxurious items. The dark history of institutional collections poses a strange juxtaposition; despite the beauty in these works of art, they are forever linked to the violence from which they were created.</p>
      `
    },
    {
      id: 5,
      title: "Family Visit",
      date: "October 2023",
      tags: ["Family", "Personal Growth", "Perspective"],
      excerpt: "The second weekend of October, my family came to visit me in Madrid. For as long as I can remember, my mom has encouraged me to study abroad; she spent a month in France as a college student and has always described it as a life-changing experience.",
      content: `
        <p>The second weekend of October, my family came to visit me in Madrid. For as long as I can remember, my mom has encouraged me to study abroad; she spent a month in France as a college student and has always described it as a life-changing experience. She hadn't been to Europe since her early twenties, and my stepdad had never left the continent. The night before they arrived, I had some anxieties about the visit. I was supposed to be the Madrilena tour guide, showing them all I had seen and learned, but I suddenly began doubting whether I'd grown at all. Once my parents were in town, I realized how much I had already changed.</p>
        
        <p>Guiding my family through the city, I gained a new perspective on my own experience so far. I represented our group at restaurants and cafes, communicating with hosts about the size of our party and whether there was a wait. I could offer a plethora of suggestions for the best local cuisine and list our orders to waitstaff in Spanish. I taught my parents how to spot good local restaurants and distinguish them from tourist traps, and my familiarity with the area proved a valuable asset in navigating the city's organic layout. My mom is a planner, and by the time they arrived, she had already booked tickets for a tapas tour and flamenco show, as well as a weekend trip to Rome.</p>
        
        <p>This trip was different from any of our other family travels. For one thing, I had already been in Europe for nearly two months, putting my family behind schedule in acclimating to the foreign setting. While I'm lucky to suffer embarrassment at the hands of my parents only on rare occasions, this became more frequent as they adjusted to life in Madrid. I became hyperaware of the volume with which they spoke, as well as how little they knew about the local culture and language. Upon further reflection, I realized this was a projection of my own insecurity surrounding American identity, and only two months prior, I had acted in a manner more similar than I was willing to admit. Despite this discomfort, their trip expanded my experience of Madrid. For the first time, I tried squid ink croquettes, empanadas gallegas, fried shark bites, and Asturian cider (which I got to pour myself the traditional way: spilling from several feet above the glass). It was grounding to reconnect with the people who had been by my side through so many personal iterations. It reminded me that my desire to learn and zest for experience had not just appeared from thin air, but are products of where I come from.</p>
      `
    },
    {
      id: 6,
      title: "Reading the Media of a City",
      date: "November 2023",
      tags: ["Academic", "Media Studies", "Chueca", "Lavapies"],
      excerpt: "Though the coursework itself is rarely anyone's favorite part of studying abroad, my Media, Gender, and Identity class was one I genuinely looked forward to each day. The professor, Coco Guzman, was a great instructor and led me to rethink the way I interpreted various environments, namely, urban environments.",
      content: `
        <p>Though the coursework itself is rarely anyone's favorite part of studying abroad, my Media, Gender, and Identity class was one I genuinely looked forward to each day. The professor, Coco Guzman, was a great instructor and led me to rethink the way I interpreted various environments, namely, urban environments. Media does not only consist of anything on a screen or in a book; it can be found everywhere. Through critically engaging with media, we can learn to read entire cities, gaining a better understanding of the citizens, their identities, and the issues that they face. Reading a city uncovers hidden forms of resistance and reveals historic legacies that persist into the present. My favorite assignments for this class were the walking trips we took around different neighborhoods in Madrid.</p>
        
        <p>Our first "field trip" was to Chueca, a historically gay neighborhood that announced itself with a rainbow-striped wall facing the metro doors, in a colorful line that followed all the way to the exit. As the class moved forward in a series of rows that were not quite straight lines, Coco told us the history and significance of where we walked. They explained that through the '70s and '80s, Chueca was considered dilapidated and dangerous, telling us that it was a neighborhood where even the police didn't want to go. Real estate prices tend to be low when rates of illegal activity are high, and these factors motivated a migration in the gay community into Chueca during the early '80s. After a few years, the diverse population had established businesses, clubs, and cultural spaces that changed the neighborhood's atmosphere; suddenly, Chueca was cool. Inevitably, this attracted more privileged residents to move in, leading to a spike in rents and the neighborhood's gentrification. Though the specific history differs, our second outing was to a similarly marginalized area called Lavapies.</p>
        
        <p>This neighborhood has one of the highest populations of migrants in Madrid, a key characteristic that has made its mark all over the city. Senegalese, Bangladeshi, Moroccan, and Latin American establishments line the streets, filling shop windows with colorful fabric and restaurants with a diverse array of cuisines. On this walk, we were tasked with analyzing various aspects of the neighborhood, including descriptions of surveillance, self-managed spaces, and gentrification resistance. Much like Chueca, along with Madrid as a whole, recent decades have seen a sharp increase in the price of housing in Lavapies. The gentrification of these neighborhoods makes them unaffordable for people who have lived their entire lives there, causing not only a separation between people and their homes, but people and their communities. Identity is a primary fixture of discourse in this class, and engaging with Madrid's LGBTQ+ and migrant cultures has spurred a passionate interest in the regional diversity of these topics.</p>
      `
    }
  ]

  const togglePost = (postId: number) => {
    setExpandedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  return (
    <section id="blog" className="blog-reports">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Blog Reports</h2>
          <p className="section-subtitle">Weekly reflections on my study abroad journey in Madrid</p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-header">
                <h3 className="blog-title">{post.title}</h3>
                <span className="blog-date">{post.date}</span>
              </div>
              
              <div className="blog-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <button 
                className="read-more-btn"
                onClick={() => togglePost(post.id)}
              >
                {expandedPosts.includes(post.id) ? 'Read Less' : 'Read More'}
              </button>
              
              {expandedPosts.includes(post.id) && (
                <div className="blog-content">
                  <div 
                    className="content-text"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogReports
