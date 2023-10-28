import { TwitterFollowSection } from "./twitterFollowSection";

export function App() {
    
    return (
    <>
            <TwitterFollowSection user="JuanoMunoz" initialIsFollowing  >
                Juan Muñoz
            </TwitterFollowSection>
            <TwitterFollowSection user="HernandoJo" >
                HernandoJo
            </TwitterFollowSection>
            <TwitterFollowSection user="SteveJobs" initialIsFollowing  >
                Steve Jobs
            </TwitterFollowSection>


    </>
    )
}