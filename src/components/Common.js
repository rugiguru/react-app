import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";


function authRedirect() {
    console.log('auth redirect');
}

const Common = {
    request: (method, url, data)=> {
        if (method != null && url != null) {
            var token = localStorage.getItem("authKey");
            var config = {
                headers: {
                    Authorization: "Bearer " + token,
                    Accept: "application/json"
                }
            };
            if (token) {
                if (method == 'post') {
                    return axios.post(
                        url,
                        data,
                        config
                        )
                        .then(res => {
                            if (res.status && res.status == 200) {
                                if (res.data.status == 2) {
                                    window.location.href = '#/restricted';
                                } else {
                                    return res;
                                }

                            }
                        }).catch(e=> {

                        });
                } else if (method == 'get') {
                    return axios.get(
                        url,
                        config
                    ).then(res => {
                        if (res.status && res.status == 200) {
                            if (res.data.status == 2) {
                                window.location.href = '#/restricted';
                            } else {
                                return res;
                            }

                        }
                    }).catch(e=> {

                    });
                }
            } else {
                window.location.href = '#/login';
            }
        }
    },
    redirect: (page)=> {
        return
    }
    //write bunch of methods like the above

}


export default Common;