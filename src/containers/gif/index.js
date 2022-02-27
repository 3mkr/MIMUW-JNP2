import React from 'react';
import { zip, from, interval} from 'rxjs';

import SizedImg from './components/SizedImg';

export const Gif = ({keyword, metaindex, index, subindex}) => {
    const httpGetAsync = (theUrl, callback) => {
        let xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                callback(xmlHttp.responseText);
            }
        };

        xmlHttp.open("GET", theUrl, true);

        xmlHttp.send(null);

        return;
    };

    const tenorCallback_search = (responseText) => {
        let response_objects = JSON.parse(responseText);
        let top_5_gifs = response_objects["results"];
        const gif_changer = zip(
            from([0, 1, 2, 3, 4]),
            interval(30 * 1000),
            (val, i) => i
        );
        
        document.getElementById("gif" + metaindex + "-" + index + "-" + subindex).src = top_5_gifs[4]["media"][0]["tinygif"]["url"];
        gif_changer.subscribe(
            i => document.getElementById("gif" + metaindex + "-" + index + "-" + subindex).src = top_5_gifs[i]["media"][0]["tinygif"]["url"]);
        return;
    };

    const grab_data = (search) => {
        const apikey = "M5X3GPVU8NBQ";
        const lmt = 8;
        const search_term = search;
        const search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;

        httpGetAsync(search_url, tenorCallback_search);
        return;
    };
    
    grab_data(keyword);

    return(
        <div>
            <SizedImg id={"gif" + metaindex + "-" + index + "-" + subindex} src="" alt="" width={220} height={164}/>
        </div>
    );
};