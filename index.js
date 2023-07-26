function fetchText(){
  return `Lorem ipsum dolor sit amet consectetur adipisicing 
  elit. Ex cupiditate accusantium vel culpa
   dolorum, error, laudantium dolor veritatis aspernatur 
   officiis ullam, tempora nihil delectus quidem. Animi possimus
    odio adipisci doloremque omnis soluta, explicabo quo fugiat sit
     ab, similique aliquam perferendis ad? Debitis
     , quaerat facilis? Iusto exercitationem ratione similique 
     doloribus, cumque optio vel ipsam ut rerum? Saepe natus
      nobis ea deserunt nemo, temporibus odit. Facere architecto
       assumenda delectus culpa eos illo. Commodi assumenda
        quisquam necessitatibus accusamus optio blanditiis
         sit, nemo velit beatae distinctio dolorem tempora 
         unde placeat recusandae architecto quis officiis 
         ratione eligendi vel laboriosam quaerat. Veritatis ex,
          odio saepe quis repellat quod pariatur mollitia 
          at tempore, placeat rem animi tempora. Nobis aspernatur
           officia nostrum aliquid explicabo similique provident error iste amet nemo maiores voluptas ut cumque, deleniti voluptatum neque sed molestias delectus, quas nihil, impedit odit dolor. Nihil tempore explicabo eum sint doloribus repellendus molestias beatae molestiae, voluptatum hic nulla magni assumenda velit quidem dolorem vitae reprehenderit officia necessitatibus quas ad, recusandae nostrum voluptates eligendi sunt? Necessitatibus excepturi numquam, minus fuga odit 
           vero at facilis pariatur magni eaque nisi laborum ex similique voluptas perspiciatis molestias sed quae, labore facere illum dicta. Sed, doloribus
            nulla doloremque saepe omnis delectus repudiandae porro quis deleniti alias ullam. Accusamus quibusdam beatae, aperiam voluptatibus fugit minus inventore? Voluptates cumque architecto, libero ratione enim alias fugiat tempore suscipit, quasi doloremque odio voluptatum ullam, itaque eius quae molestiae temporibus facilis nostrum. Quibusdam, id officia ab quisquam facere neque fugiat ut dolorum modi, qui eveniet possimus officiis doloremque eaque dolores recusandae libero temporibus sequi iste alias 
            reiciendis reprehenderit soluta aliquid nulla. Corporis tempora, quam quia aliquid ducimus eos exercitationem blanditiis non nihil suscipit nesciunt possimus porro ullam officia expedita esse eveniet ab soluta. A fugiat culpa laboriosam maxime, distinctio molestias nesciunt eligendi. Enim
             eos provident magni quae maxime id unde sequi illum itaque alias tempore fuga est accusamus placeat qui a impedit, praesentium iure dolor dicta. Consectetur, cumque ab blanditiis maxime porro eaque quam itaque placeat deleniti asperiores soluta est dicta. Voluptate atque, repellat quisquam tempore doloremque at. Corporis atque nemo error quod dolorum non consequuntur pariatur ullam maxime velit eum consequatur architecto optio, suscipit delectus perferendis temporibus minus numquam aliquid? Dicta cum vitae dolores magni laborum corporis quibusdam. Ad, veritatis et ratione accusantium vitae mollitia numquam modi, cum repudiandae atque veniam odit minus cupiditate doloribus! Ratione debitis ab reiciendis numquam totam quia, dolores similique
             pariatur dolorem id reprehenderit corporis ad, laudantium eveniet quaerat quasi iste, asperiores molestias qui perferendis a 
            est provident eum aspernatur! Error quas rem eum laudantium dolores, voluptates ullam, deleniti tempore, sed autem reiciendis exercitationem minus tempora velit esse. Tempora eum expedita quis officiis doloremque explicabo ipsa nobis corporis amet tenetur rerum cum vel, animi laudantium
             nam molestiae! Velit et, eveniet sunt voluptate dolore iusto eos. Reprehenderit id blanditiis nobis, odit repudiandae dolore, quidem adipisci saepe vitae accusantium quam 
            voluptatem dignissimos libero iste laborum doloremque perferendis ullam corporis at. Cum, voluptates, suscipit optio rem dolore ex ut reprehenderit impedit nemo perspiciatis reiciendis magni sint!`
  

}

const text=fetchText();
const container = document.querySelector("#component-container");
const pEl=container.querySelector("p");

const button1 =container.querySelector("button[action=showMoretext]");
const button2 =container.querySelector("button[action=showLesstext]");

pEl.innerHTML=text;
let subIndex=260;
function showLess(){
  let temptext=text.substring(0, subIndex);
  for(i=subIndex-1; ((text[i+1]!=" ")&&(text[i+1]!=",")); i+=1){
  temptext+=text[i+1];
  }
  pEl.innerHTML=temptext+"..."
   
  
}
function showMore(){
  pEl.innerHTML=text;
  
}

button1.addEventListener("click", showMore);
button2.addEventListener("click", showLess);