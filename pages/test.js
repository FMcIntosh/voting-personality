import React, { Component } from 'react'
import withRedux from "next-redux-wrapper"
import { makeStore, submit } from 'data/store'


const Page = ({custom}) => (
  <div>
    <div>Prop from Redux {}</div>
    <div>Prop from getInitialProps {custom}</div>
  </div>
);

Page.getInitialProps = ({store, isServer, pathname, query}) => {
  // component will read from store's state when rendered
  console.log(store.getState().oppenness)
  store.dispatch(submit(5))
  // pass some custom props to component from here
  console.log(store.getState().oppenness)
  return {custom: 'custom'}; 
};



export default withRedux(makeStore, null)(Page)