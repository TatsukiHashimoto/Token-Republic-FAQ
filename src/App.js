import './App.css';
import React from 'react';
import { makeStyles, IconButton, Box, Button, Container, ThemeProvider, createMuiTheme, Typography, Divider } from '@material-ui/core';
import AccordionFaq from '../src/components/AccordionFaq';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Oswald',
      'Raleway',
      'Helvetica',
      'Arial',
      'Lucida',
      'sans-serif'
    ].join(','),
  }
})

const useStyles = makeStyles((theme) => ({
  faq: {
    position: 'relative',
    width: '100%',
    height: '250px',
    backgroundPosition: 'center right',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://crowdsale.tokenrepublic.io/wp-content/uploads/2021/04/faq.jpg)',
  },
  faqText: {
    position: 'absolute',
    top: '50%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    color: '#005440',
  },
  faqLink: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    marginTop: '10px',
    marginBottom: '10px',
  },
  topic: {
    marginTop: '10px',
  },
  bringToTopButton: {
    margin: '10px',
  },
  bottomNavList: {
    display: 'inline',
    float: 'left',
    padding: '10px',
    marginRight: '5px',
    color: 'white',
    textAlign: 'center',
    contentAlign: 'center',
  },
  bottomNav: {
    backgroundColor: '#005440',
    height: '55px'
    
  },
  link: {
    color: 'white',
  }
}));


function App() {

  const classes = useStyles();

  function handleTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="Content">
          <div className="Faq">
            <Box className={classes.faq} m={1}>
                <Typography variant="h3" className={classes.faqText}>
                  Frequently Asked Questions
                </Typography>
            </Box>
            <Container>
              <div className="Bar">
                <Box className={classes.faqLink}>
                  <Button href="#General">General</Button>
                  <Button href="#MetaMask">MetaMask</Button>
                  <Button href="#Investing">Investing</Button>
                  <Button href="#Crowdsale">Crowdsale</Button>
                </Box>
              </div>
              <div id="General">
                <Typography variant="h6" className={classes.topic}>
                  General Questions
                </Typography>

                <AccordionFaq 
                  Topic={"Starting"}
                  Question = {"What do we need to get started?"}
                  Answer= {"The only prerequisite to get started on the token republic dashboard is the installation of MetaMask. \n There are no requirements when creating a project on the token republic platform, however we advise that you should, like any ICO, have a project roadmap outlined, a website where investors can find more information about your project and a white paper that outlines your project and any other information."}
                />

                <AccordionFaq 
                  Topic={"General"}
                  Question = {"Is the platform self-service?"}
                  Answer= {"The platform is self-service, however we do plan to offer ICO assistance and tokenomics consultancy."}
                />

                <AccordionFaq 
                  Topic={"Token Republic"}
                  Question = {"Are we on the platform indefinitely?"}
                  Answer= {"When creating a crowdsale you are required to enter a start and end date, your project will exist on the platform for this time."}
                />

                <AccordionFaq 
                  Topic={"Funds"}
                  Question = {"When and how can you draw out funds?"}
                  Answer= {"You will receive funds to your metamask wallet as they are invested."}
                />

                <AccordionFaq 
                  Topic={"Token Republic"}
                  Question = {"What is Token Republic? What can it do?"}
                  Answer= {"Token Republic is an blockchain crowdfunding platforms that offers an efficient crowdfunding way for entrepreneurs and developers to build their business with fewer intermediaries, allowing them to focus on development."}
                />

              </div>
              
              <div id="MetaMask">
                <Divider/>
                <Typography variant="h6" className={classes.topic}>
                  Metamask Questions
                </Typography>

                <AccordionFaq 
                  Topic={"MetaMask"}
                  Question = {"What do we need to get started?"}
                  Answer= {" 1. Is Total Supply of Token, this is the number of tokens that are issued when you create a token. You can use the same token on multiple crowdsales, required that the allocation of tokens to each crowdsale does not exceed the total supply of the token.\n\n"+
                  "2. The Crowdsale Token Allocation. This is how many tokens are available to buy via the crowdsale. This supply should equal the amount of funding you want for the crowdsale project i.e you supply 1,000,000 tokens to a crowdsale project these will be sold at the price per token you set."}
                />
              </div>

              <div id="CrowdSale">
                <Divider/>
                <Typography variant="h6" className={classes.topic}>
                  CrowdSale Question
                </Typography>

                <AccordionFaq 
                  Topic={"Fee"}
                  Question = {"Any Crowd Sale Creation Fees?"}
                  Answer= {"Ethereum Mainnet requires a gas fee when issuing tokens and creating a crowdsale. However, there are no additional fees."}
                />
              </div>

              <div id="Token">
                <Divider/>
                <Typography variant="h6" className={classes.topic}>
                  Token
                </Typography>

                <AccordionFaq 
                  Topic={"Token and CrowdSale"}
                  Question = {"Difference Between Token and Crowd sale token allocation?"}
                  Answer= {"1. Is Total Supply of Token, this is the number of tokens that are issued when you create a token. You can use the same token on multiple crowdsales, required that the allocation of tokens to each crowdsale does not exceed the total supply of the token.\n\n"+
                  "2. The Crowdsale Token Allocation. This is how many tokens are available to buy via the crowdsale. This supply should equal the amount of funding you want for the crowdsale project i.e you supply 1,000,000 tokens to a crowdsale project these will be sold at the price per token you set."}
                />
              </div>

            </Container>

            <IconButton onClick={handleTop} id="top" className={classes.bringToTopButton}>
                <KeyboardArrowUpIcon/>
            </IconButton> 
          </div>
        </div>
        <footer id="main-footer">
        <div id="et-footer-nav">
					<div className={classes.bottomNav}>
						<ul id="menu-footer">
              <li id="menu-item-1222" className={classes.bottomNavList}><a href="https://tokenrepublic.io/" className={classes.link}>Token Republic</a></li>
              <li id="menu-item-1223" className={classes.bottomNavList}><a href="https://tokenrepublic.io/about-us/" className={classes.link}>About Us</a></li>
              <li id="menu-item-1224" className={classes.bottomNavList}><a href="https://tokenrepublic.io/overview/" className={classes.link}>TRG</a></li>
              <li id="menu-item-1225" className={classes.bottomNavList}><a href="https://tokenrepublic.io/partners/" className={classes.link}>Partners</a></li>
              <li id="menu-item-1226" className={classes.bottomNavList}><a target="_blank" rel="noopener" href="http://tokenrepublic.io/wp-content/uploads/2020/11/Token-Republic-Whitepaper-5.1-5.pdf">Whitepaper</a></li>
            </ul>					
          </div>
				</div>
			  </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
