import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AuthorizedLayoutHeader from '../AuthorizedLayoutHeader/AuthorizedLayoutHeader';
import { FilterSelect } from '../FilterSelect/FilterSelect';
import Model from '../Model/Model';
import Models from '../Models/Models';
import Projects from '../Projects/Projects';
import styles from './AuthorizedLayout.module.css';

export default class AuthorizedLayout extends React.PureComponent {
  public render() {
    return (
      <Router>
        <div className={styles.layout}>
          <div className={styles.header}>
            <AuthorizedLayoutHeader />
          </div>
          <div className={styles.filters_bar}>
            <FilterSelect placeHolderText="Search models and filters" />
          </div>
          <div className={styles.content}>
            <Switch>
              <Route exact={true} path="/" component={Projects} />
              <Route path={'/project/:projectId/models'} component={Models} />
              <Route path={'/project/:projectId/model/:modelId'} component={Model} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}