import React, {Component} from 'react';
import axios from 'axios';

class GitHub extends Component{
    constructor(){
        super();
        //Promise非同期の動きをさせるための設定
        this.getGitHubData('greg');
    }

    getGitHubData(_searchTerm){
        axios.get("http://api.github.com/search/users?q="+_searchTerm)
            .then(res=>{
                console.log(res.data.items);
            });
    }

    render(){
        return(
         <div>
         </div>
        )
    };
}

export default GitHub;