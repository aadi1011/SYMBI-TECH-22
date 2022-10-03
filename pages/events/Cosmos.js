import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
import Image from 'next/image';
import Poster from "../../public/posters/cosmos.png"
// import './events.css'




const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function Events() {
    return (
        <div className="body">
            <AnimatedCursor
                innerSize={15}
                outerSize={40}
                color='255, 255, 255'
                outerAlpha={0.2}
                innerScale={0.6}
                outerScale={2}
                trailingSpeed={3}
            />
            <Head>
                <title>Hunting through Cosmos</title>
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">Hunting Through Cosmos</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}

                                
<br/> 
{/* <h1 className="about-main-text">Rules</h1> */}
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
</p>    
<p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                The objective is to hunt all over the campus for clues and hints which will be based on the theme of the technical fest ‘COSMOS’, to navigate further and find the final treasure. The team who reaches the last stage and cracks the final clue in the least amount of time will win.
                                <br/></p> 

<h2 className="about-main-text">Event Rules</h2>

<br/>
<p className="about-subtext">
1. Participants will begin at their starting point with the first QR code pointing them to the first hint to go ahead in the game.<br/>
2. Since the theme is cosmos, these hints will be passed on to the participants by answering questions based on the theme.<br/>
3. QR codes are arranged sequentially which must be followed by the teams. <br/>
4. Participants must use their phones only to scan the QR codes.<br/>
5. Along with all the riddles and mysteries, the treasure hunt will have a time limit that will be specified to participants before the hunt begins.<br/>
<br/>
<b>Team Size: </b> Groups of 4<br/>


</p>
                            
                            <p className="about-subtext"></p>
                            <Spacer y={1} />
                            <Button  className="about-btn" size="xlarge" shadow color="gradient" auto>
                            <Link href = "/register">Register Now</Link>
                            </Button>
                        

                    </Grid>
                    <Grid xs={12} md={6} justify = "center" className="about-img-col">
                        
                            <Image alt="" className="about-img" src={Poster} bottom="400px"/>
                        
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
        </div>
    )
}