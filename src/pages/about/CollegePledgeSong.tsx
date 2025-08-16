import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Music, Flag, BookOpen, Users, Download } from "lucide-react";

const CollegePledgeSong = () => {
  return (
    <PageLayout 
      title="College Pledge & Song" 
      description="Our sacred pledge and inspiring anthem that unite the SVRMC community in purpose and pride."
    >
      <div className="space-y-8">
        
        {/* Overview */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-college-blue mb-4">Unity in Purpose, Strength in Values</h2>
            <p className="text-lg text-gray-600">
              Our college pledge and song embody the spirit of SVRMC, reflecting our commitment to 
              excellence, integrity, and service to humanity.
            </p>
          </CardContent>
        </Card>

        {/* College Pledge */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              SVRMC College Pledge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
              <div className="text-center space-y-6">
                <div className="text-lg leading-relaxed text-gray-800">
                  <p className="font-semibold text-xl text-college-blue mb-6">
                    "WE, THE STUDENTS AND FACULTY OF SVRMC, SOLEMNLY PLEDGE:"
                  </p>
                  
                  <div className="space-y-4 text-left max-w-4xl mx-auto">
                    <p>
                      To uphold the highest standards of <strong>academic excellence</strong> and pursue knowledge 
                      with dedication, curiosity, and integrity.
                    </p>
                    
                    <p>
                      To respect the <strong>dignity and diversity</strong> of all members of our college community, 
                      fostering an environment of mutual understanding and cooperation.
                    </p>
                    
                    <p>
                      To embody the <strong>values of honesty, discipline, and responsibility</strong> in all our 
                      academic and personal endeavors.
                    </p>
                    
                    <p>
                      To contribute positively to <strong>society and the nation</strong>, using our education and 
                      skills for the betterment of humanity.
                    </p>
                    
                    <p>
                      To preserve and promote our <strong>cultural heritage</strong> while embracing progressive 
                      ideas and innovations.
                    </p>
                    
                    <p>
                      To protect and nurture our <strong>environment</strong>, recognizing our responsibility 
                      toward future generations.
                    </p>
                    
                    <p>
                      To carry forward the <strong>legacy of SVRMC</strong> with pride and honor, wherever our 
                      paths may lead us.
                    </p>
                  </div>
                  
                  <p className="font-semibold text-xl text-college-blue mt-8">
                    "JAI HIND! JAI SVRMC!"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pledge in Telugu */}
            <div className="mt-8 bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-center mb-4 text-orange-700">College Pledge in Telugu</h4>
              <div className="text-center text-lg leading-relaxed">
                <p className="mb-4">
                  "మేము, ఎస్.వి.ఆర్.ఎం.సి విద్యార్థులు మరియు అధ్యాపకులం, గౌరవంగా ప్రతిజ్ఞ చేస్తున్నాము:"
                </p>
                <p className="text-gray-700">
                  ఉన్నత విద్యా ప్రమాణాలను నిలబెట్టడానికి మరియు నిజాయితీ, క్రమశిక్షణ, మరియు 
                  బాధ్యతతో జ్ఞానాన్ని అన్వేషించడానికి మేము కట్టుబడి ఉంటాము.
                </p>
                <p className="mt-4 font-semibold text-orange-700">
                  "జై హింద! జై ఎస్.వి.ఆర్.ఎం.సి!"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* College Song */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Music className="h-8 w-8 text-purple-500 mr-3" />
              SVRMC College Song
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
              <div className="text-center space-y-6">
                <h3 className="text-xl font-bold text-purple-700 mb-6">"VIDYA JYOTHI SVRMC"</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* English Version */}
                  <div>
                    <h4 className="font-semibold mb-4 text-purple-600">English Version</h4>
                    <div className="text-left space-y-3 text-gray-800">
                      <p className="italic">
                        <strong>Verse 1:</strong><br />
                        In the halls of SVRMC we stand,<br />
                        United by knowledge, hand in hand,<br />
                        Where wisdom flows like sacred streams,<br />
                        And every heart with purpose gleams.
                      </p>
                      
                      <p className="italic">
                        <strong>Chorus:</strong><br />
                        SVRMC, our beacon bright,<br />
                        Guiding us to heights of light,<br />
                        With honor, truth, and service true,<br />
                        We pledge our loyalty to you.
                      </p>
                      
                      <p className="italic">
                        <strong>Verse 2:</strong><br />
                        From classrooms filled with eager minds,<br />
                        To future paths that each one finds,<br />
                        Our college shapes both heart and soul,<br />
                        Making every student whole.
                      </p>
                      
                      <p className="italic">
                        <strong>Bridge:</strong><br />
                        Through challenges we rise above,<br />
                        Bound by learning, hope, and love,<br />
                        SVRMC forever in our hearts,<br />
                        Where every new journey starts.
                      </p>
                    </div>
                  </div>
                  
                  {/* Telugu Version */}
                  <div>
                    <h4 className="font-semibold mb-4 text-purple-600">Telugu Version</h4>
                    <div className="text-left space-y-3 text-gray-800">
                      <p className="italic">
                        <strong>చరణం 1:</strong><br />
                        ఎస్.వి.ఆర్.ఎం.సి మా మందిరం,<br />
                        విద్య జ్యోతులతో వెలుగురాం,<br />
                        జ్ఞాన గంగ ప్రవహించుచున్న,<br />
                        హృదయాలన్నీ ఉత్సాహంతో నిండిన.
                      </p>
                      
                      <p className="italic">
                        <strong>పల్లవి:</strong><br />
                        ఎస్.వి.ఆర్.ఎం.సి మా దీపం,<br />
                        ఉన్నత లక్ష్యాలకు మార్గం,<br />
                        గౌరవం, సత్యం, సేవతో,<br />
                        మా ప్రేమ నీకు శాశ్వతం.
                      </p>
                      
                      <p className="italic">
                        <strong>చరణం 2:</strong><br />
                        తెలివితేటలతో నిండిన తరగతుల్లో,<br />
                        భవిష్యత్ మార్గాలు వెతుకుతున్న,<br />
                        మా కళాశాల హృదయ ఆత్మలను,<br />
                        పరిపూర్ణంగా తీర్చిదిద్దుతుంది.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Audio/Video */}
                <div className="mt-8 text-center">
                  <div className="flex justify-center gap-4">
                    <Button variant="outline">
                      <Music className="h-4 w-4 mr-2" />
                      Listen to Audio
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Song
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When and How We Use Them */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Flag className="h-6 w-6 text-green-500 mr-2" />
              When We Recite the Pledge & Sing Our Song
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-700">Regular Occasions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Every Monday morning assembly</li>
                  <li>• Beginning of each semester</li>
                  <li>• Independence Day celebrations</li>
                  <li>• Republic Day ceremonies</li>
                  <li>• College Annual Day function</li>
                  <li>• Graduation ceremonies</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-green-700">Special Events</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• New student orientation</li>
                  <li>• Cultural festivals and competitions</li>
                  <li>• Sports day inaugurations</li>
                  <li>• Alumni meets and reunions</li>
                  <li>• Award ceremonies</li>
                  <li>• Farewell functions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Significance and Values */}
        <Card>
          <CardHeader>
            <CardTitle>Significance and Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Unity and Belonging</h4>
                <p className="text-sm text-gray-600">
                  The pledge and song create a sense of community and shared identity among all 
                  members of the SVRMC family, transcending individual differences.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Values Reinforcement</h4>
                <p className="text-sm text-gray-600">
                  Regular recitation reinforces our core values of integrity, excellence, service, 
                  and respect, making them an integral part of our daily lives.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Tradition and Legacy</h4>
                <p className="text-sm text-gray-600">
                  These sacred words connect current students with generations of alumni, 
                  creating a continuous chain of tradition and shared heritage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student Testimonials */}
        <Card>
          <CardHeader>
            <CardTitle>What Our Community Says</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded">
                <p className="text-gray-700 italic mb-2">
                  "Reciting our college pledge every Monday morning gives me a sense of purpose and 
                  reminds me why I'm here - not just to get a degree, but to become a better person."
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Priya Sharma</Badge>
                  <span className="text-sm text-gray-500">Final Year, Computer Science</span>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded">
                <p className="text-gray-700 italic mb-2">
                  "Even after 10 years of graduation, I still remember every word of our college song. 
                  It brings back beautiful memories and makes me proud to be an SVRMC alumnus."
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Rajesh Kumar</Badge>
                  <span className="text-sm text-gray-500">Alumni, Batch 2014</span>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded">
                <p className="text-gray-700 italic mb-2">
                  "Teaching students the college pledge helps them understand what we stand for as an 
                  institution. It's not just words - it's our commitment to excellence and integrity."
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Dr. Meera Patel</Badge>
                  <span className="text-sm text-gray-500">Professor, Physics Department</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Download Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Pledge Text (PDF)</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Song Lyrics (PDF)</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Music className="h-6 w-6 mb-2" />
                <span className="text-center">Song Audio (MP3)</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <BookOpen className="h-6 w-6 mb-2" />
                <span className="text-center">Complete Guide</span>
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default CollegePledgeSong;