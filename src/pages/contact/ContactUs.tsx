import React from 'react';

class ContactUs extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // This is the place to set our initial states
    console.log('constructor');
  }

  componentDidMount() {
    console.log('Contact Us component did mount');
    //place to add any logic that we need after view did load
  }

  componentWillUnmount() {
    console.log('Contact Us component will unmount');
    //place to add any logic that we need after we exit this component
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
    //place to add any logic that we need if some specific prop has changed the value
  }

  render() {
    return (<h2>Contact Us</h2>);
  }
}

export default ContactUs;
