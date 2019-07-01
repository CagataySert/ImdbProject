import { action, observable, toJS } from 'mobx'
import { useStaticRendering } from 'mobx-react'
import fetch from 'isomorphic-unfetch'
import { API_BASE } from '../constants/constants.js';
import { configure } from "mobx";


const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

class Store {
    @observable films = {};

    constructor(initialData = {}) {
        this.films = initialData;
    }

    @action //Try-cath eklenecek.. 
    searchFilm = async (title, year, type) => {
        const response = await fetch(`${API_BASE}&s=${title}&y=${year}&type=${type}`);
        const { Search } = await response.json();
        this.films = Search
    }
}

let store = null

export function initializeStore(initialData) {
    if (isServer) {
        return new Store(initialData)
    }
    else {
        if (store === null) {
            store = new Store(initialData)
        }
        return store
    }
}