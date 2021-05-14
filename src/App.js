import './App.css';
import React from 'react';
import { makeStyles, IconButton, Box, Button, Container, ThemeProvider, createMuiTheme, Typography, Divider, Accordion } from '@material-ui/core';
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
                  <Button href="#CrowdSale">Crowdsale</Button>
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

                <AccordionFaq
                  Topic={"MetaMask"}
                  Question={"What is MetaMask?"}
                  Answer={"Metamask is a cryptocurrency wallet that holding your token. Token Republic have collaborated with Metamask to help our client making transaction in a safer and more efficient way. "}
                />

                <AccordionFaq
                  Topic={"Invest"}
                  Question={"How do I use MetaMask to Invest?"}
                  Answer={"When investing token, use Metamask to input your preferred number of tokens, and Metamask will send you the private key address that hold your tokens. Paste the private key address into Token Republic and complete the investment.  "}
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

                <AccordionFaq
                  Topic="Setup"
                  Question={"How to start the CrowdSale?"}
                  Answer={"After login in Token Republic dashboard. Click the “Crowdsale” button and set up crowdsale as required. "}
                />

                <AccordionFaq
                  Topic={"Funding"}
                  Question={"If the funding has not achieved, could I still start my project?"}
                  Answer={"No, we are running “zero or all” crowdfunds system. If the funds not enough, the project will not start. "}
                />

                <AccordionFaq 
                  Topic={"Rewards"}
                  Question={"I alread invested in a project, where can I receive the rewards?"}
                  Answer={"Difference project may contain different ways of rewarding methods, go to Project details and check the reward method. Once your reward result is out, you will receive that immediately in your Metamask accounts. "}
                />

                <AccordionFaq
                  Topic={"Refund"}
                  Question={"If the project fail, could I get my refund?"}
                  Answer={"It depends, project may fail because they run out of budget or estimate the budget wrong. If the project fails by other situation, you may receive the refund within 3-15 working days."}
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

                <AccordionFaq 
                  Topic={"Token"}
                  Question = {"What is a Token?"}
                  Answer={"Token is a currency that work in Token Republic, you can only use token to invest or set up crowdsales within Token republic. As for tokens, it is a special kind of virtual currency tokens that reside on their own blockchains and represent an asset or utility."}
                />
                
                <AccordionFaq 
                  Topic={"Token"}
                  Question={"How could I set up Token"}
                  Answer={"After login to dashboard, there will be a “Token” button on the top left side of your dashboard. Click it to create your own token or modify it as your interest. "}
                />
              </div>

              <div id="Investing">
                <Divider/>
                <Typography variant="h6" className={classes.topic}>
                  Investing
                </Typography>

                <AccordionFaq 
                  Topic={"CrowdSale"}
                  Question={"How could I invest in a CrowdSale?"}
                  Answer={"First, you need to install Metamask, the application that holding your cryptocurrency. Then connect it with your Token republic account. After all, you are free to browse and invest in any interested crowdsales."}
                />

                <AccordionFaq
                  Topic={"Token"}
                  Question={"I don't have any required token, what should I do?"}
                  Answer={"Metamask has a Swap token feature, use your exist token and swap them into the token that crowdsale required. Then you can successfully invest in crowdsale. "}
                />

                <AccordionFaq
                  Topic={"CrowdSale"}
                  Question={"Why can I not invest in a seeding CrowdSale"}
                  Answer={"Seeding crowdsales have 2 phases: Seeding and Funding. Seeding phase is to show your interest in the crowdsale. After that, you may invest the project when it became Funding phase."}  
                />

                <AccordionFaq
                  Topic={"CrowdSale"}
                  Question={"Why my interest CrowdSale disappear?"}
                  Answer={"The crowdsale may fail to collect enough interest or fund, so it is being cancelled."}
                />

                <AccordionFaq 
                  Topic={"CrowdSale"}
                  Question={"Where can I see how much interest has the project has gotten?"}
                  Answer={"Go to 'My Investment' and check out the current interest amount of the project."}
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
