import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Students from '../students';
import Attendees from '../attendees';

import Article from '../../redux_components/app';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

function logOut(props) {
    sessionStorage.clear();
    props.history.goBack();
}

const TabsExampleSimple = (props) => (
  <div>
    <MuiThemeProvider>
  <Tabs>
    <Tab label="Attendees" >
      <Attendees />
    </Tab>
    <Tab label="Students" >
        <Students />
    </Tab>
    <Tab label="Articles" >
        <Article />
    </Tab>
    <Tab
      label="FeedBack"
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
  </MuiThemeProvider>
  <input type='button' value="Logout" onClick={logOut.bind(this, props)}/>
  </div>
);

export default TabsExampleSimple;