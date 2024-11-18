
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Code for Interview</Typography>
                <Text variant="h5">I'm Yash Roy, a final-year BTech Computer Science student at Sharda University. <br/>
                I specialize in web development, with strong skills in React and Node.js.
                 My current project focuses on developing a real-time license plate recognition system for parking management, building on my previous work with TensorFlow and EasyOCR. <br/>
                 I'm passionate about software development and excited to apply my skills to solve real-world problems.<br/>
                 I'm eager to grow in the tech industry and make a meaningful impact.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/theyashh" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 20 , marginRight: 5}}>
                        <Link href="https://www.linkedin.com/in/yash-roy-658956219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                    </Box>  
                    <Box component="span" style={{ marginLeft: 10 , marginRight: 10}}>
                        or send me an Email 
                        <Link href="mailto:itsroysons@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                    </Box>
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;