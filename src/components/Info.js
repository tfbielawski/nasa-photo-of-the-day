/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD info.js
 * 7/14/2021
 */

//import react
import React from "react";

//Default function definition, pass in {explanation}
export default function Info({explanation})
{
    //Return the title in h1 tag
    return <p>{explanation}</p>;
}