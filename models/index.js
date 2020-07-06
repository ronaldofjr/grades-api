import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

import { gradesModel } from '../models/grades.js';

const db = {};
db.mongoose = mongoose;
db.grades = gradesModel(mongoose);
db.url = process.env.MONGODB;

export { db };
