import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sportKindTitle = "New";
  constructor(private apiService: ApiService) {

    this.apiService.getCategory().subscribe((data:any) => {
	      
      console.log("Call-------------------------->Here " +data['users'][0]['name']);

      
    }, error =>
    {
        console.log("Server response error : ", error);
    });
   
      // this.apiService.getCategory().pipe(
      //   map((xmlString: string)=>{
      //     // console.log("Call-------------------------->Here ");
      //     const asJson = this.xmlStringToJson(xmlString);
      //     return asJson;
      //   }),
      //   catchError((err)=> {
      //     console.warn('INT ERR:', err);
      //     return err;     
      //   })
      // );
      
   }

  //  xmlStringToJson(xml: string)
  //   {
  //     const oParser = new DOMParser();
  //     const xmlDoc = oParser.parseFromString(xml, "application/xml");

  //     return this.xmlToJson(xmlDoc);
  //   }

  //   xmlToJson(xml :any)
  //   {
  //     // Create the return object
  //     var obj = {};

  //     if (xml.nodeType == 1) { // element
  //       // do attributes
  //       if (xml.attributes.length > 0) {
  //       obj["@attributes"] = {};
  //         for (var j = 0; j < xml.attributes.length; j++) {
  //           var attribute = xml.attributes.item(j);
  //           obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
  //         }
  //       }
  //     } else if (xml.nodeType == 3) { // text
  //       obj = xml.nodeValue;
  //     }

  //     // do children
  //     if (xml.hasChildNodes()) {
  //       for(var i = 0; i < xml.childNodes.length; i++) {
  //         var item = xml.childNodes.item(i);
  //         var nodeName = item.nodeName;
  //         if (typeof(obj[nodeName]) == "undefined") {
  //           obj[nodeName] = this.xmlToJson(item);
  //         } else {
  //           if (typeof(obj[nodeName].push) == "undefined") {
  //             var old = obj[nodeName];
  //             obj[nodeName] = [];
  //             obj[nodeName].push(old);
  //           }
  //           obj[nodeName].push(this.xmlToJson(item));
  //         }
  //       }
  //     }
  //     return obj;
  //   }

   ngOnInit() {
    
   
  }

}
