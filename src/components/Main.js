import React, { useState, useEffect } from "react";
import Api from '../utils/Api';

export default function Main() {

    useEffect(() => {
        console.log(Api);
        // if (!search) {
        //   return;
        // }
    
        // Api.search
        //   .then(res => {
        //     console.log(res);
        //   })
        //   .catch(err => console.log(err));
        }, []);
    
    



  return (
    <div>
      <div>
        <h1>Employee Directory</h1>
        <h3>
          Click on the headings to toggle-sort, or search for a specific
          employee by first name using the search bar
        </h3>
      </div>
      <table>
          <tr>
              <th>
                  Photo
              </th>
              <th>
                  First name
              </th>
              <th>
                  Last name
              </th>
              <th>
                  Phone Number
              </th>
              <th>
                  Email address
              </th>
              <th>
                  User name
              </th>
          </tr>
          <tr>
              <td>
                  photo 
              </td>
              <td>
                  adam
              </td>
              <td>
                  Wilson
              </td>
              <td>
                  34343453534534
              </td>
              <td>
                  photo@emaomple.com
              </td>
              <td>
                  bigJack
              </td>
          </tr>
      </table>
    </div>
  )
}
