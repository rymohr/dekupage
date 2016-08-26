import React from 'react';
import { createApp } from '../../dekupage';
import Counter from './components/Counter';
import Model from './model';
import Actions from './actions';

export default createApp(Counter, Model, Actions);
