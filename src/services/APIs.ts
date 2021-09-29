import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import User from '../models/User'
import Entry from '../models/Entry'
import Location from '../models/Location'
import Category from '../models/Category'
const API_URL = 'http://localhost:8081/';

const getHeaders = () => {
    const bearer = `Bearer ${localStorage.getItem('authToken')}`;
    return store.getters.getIsCandidate ? {
        authorization: bearer
    } : {
        authToken: bearer
    };
};

export default {
  getUsers() {
    return axios.get(API_URL + 'users', { headers: getHeaders() });
  },

  getCategories() {
    return axios.get(API_URL + 'categories', { headers: getHeaders() });
  },

  getLocations () {
    return axios.get(API_URL + 'locations', { headers: getHeaders() });
  },

  getEntries() {
    return axios.get(API_URL + 'entries', { headers: getHeaders() });
  },

  createUsers(user: User) {
    return new Promise((resolve, reject) => {
        axios.post('/users', user, { headers: getHeaders() })
            .then((res: AxiosResponse) => {
                resolve(Object.assign(User.emptyUser(), res.data));
            })
            .catch((err: AxiosError) => {
                reject(err);
            })
    });
  },

  createEntry(entry: Entry) {
    return new Promise((resolve, reject) => {
        axios.post('/entries', entry, { headers: getHeaders() })
            .then((res: AxiosResponse) => {
                resolve(Object.assign(Entry.emptyEntry(), res.data));
            })
            .catch((err: AxiosError) => {
                reject(err);
            })
    });
  },

  createLocation(location: Location) {
    return new Promise((resolve, reject) => {
        axios.post('/locations', location, { headers: getHeaders() })
            .then((res: AxiosResponse) => {
                resolve(Object.assign(Location.emptyLocation(), res.data));
            })
            .catch((err: AxiosError) => {
                reject(err);
            })
    });
  },
  createCategory(category: Category) {
    return new Promise((resolve, reject) => {
        axios.post('/categories', category, { headers: getHeaders() })
            .then((res: AxiosResponse) => {
                resolve(Object.assign(Category.emptyCategory(), res.data));
            })
            .catch((err: AxiosError) => {
                reject(err);
            })
    });
  },

  deleteUsers(id: string) {
    return new Promise(async (resolve, reject) => {
        axios.delete(`/users/${id}`, { headers: getHeaders() })
            .then((res: AxiosResponse<User>) => resolve(res.data))
            .catch(err => reject(err));
    });
  },

  deleteCategories(id: string) {
    return new Promise(async (resolve, reject) => {
        axios.delete(`/categories/${id}`, { headers: getHeaders() })
            .then((res: AxiosResponse<Category>) => resolve(res.data))
            .catch(err => reject(err));
    });;
  },

  deleteLocations (id: string) {
    return new Promise(async (resolve, reject) => {
        axios.delete(`/locations/${id}`, { headers: getHeaders() })
            .then((res: AxiosResponse<Location>) => resolve(res.data))
            .catch(err => reject(err));
    });
  },

  deleteEntries(id: string) {
    return new Promise(async (resolve, reject) => {
        axios.delete(`/entries/${id}`, { headers: getHeaders() })
            .then((res: AxiosResponse<Entry>) => resolve(res.data))
            .catch(err => reject(err));
    });
  },

}