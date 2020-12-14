! function($) {
    const $commodityli_lists = $(".commodityli_lists");
    const $commodity_seniority = $(".commodity_seniority");
    const $muin_lists = $(".muin_lists");
    const $nav_btn = $(".nav a")
    const $main_div = $(".main_div");
    const $banner_btn = $(".banner_btn");
    const $banner = $(".banner");
    $banner_btn.on("click", function() {
        $banner.hide();
    })
    $.ajax({
        url: 'http://localhost/dashboard/FengQu/php/index1.php',
        dataType: 'json'
    }).done(function(data) {
        console.log(data);
        $strhtml = '';
        $strhtml1 = '';
        $strhtml2 = '';
        $nav_btn.hover(function() {
            $(this).addClass("nav_a").siblings("a").removeClass("nav_a");
        }, function() {
            $(this).removeClass("nav_a")
        })
        $nav_btn.on("click", function() {
            $(this).addClass("nav_a").siblings('a').removeClass("nav_a");
            $main_div.eq($(this).index()).addClass("tab").siblings('div').removeClass("tab");
        })
        $.each(data, function(index, value) {
            if (value.sid >= 1 && value.sid <= 10) {
                $strhtml += `
                <a href="javascript:;">
                <li>
                    <div class="pic">
                        <img src="${value.url}" alt="${value.title}">
                    </div>
                    <h3>${value.title}</h3>
                    <p>
                        ￥<span class="price-1">${value.newprice}</span>
                        <span class="price-b">￥<span class="price-2">${value.price}</span></span>
                    </p>
                </li>
                `;
            }

            if (value.sid >= 11 && value.sid <= 20) {
                $strhtml1 += `<a href="javascript:;">
                        <li>
                            <div class="li_left">
                                <img src="${value.url}" alt="">
                            </div>
                            <div class="li_right">
                                <h4>${value.title}</h4>
                            </div>
                            <p>
                                ￥<span class="price-1">${value.newprice}</span>
                                <span class="price-b">￥<span class="price-2">${value.price}</span></span>
                            </p>
                        </li>`;

            }

            if (value.sid >= 21 && value.sid <= 30) {
                $strhtml2 += `
                        <a href="javascript" class="muin_li">
                        <li>
                            <img src="${value.url}" alt="">
                            <h3>${value.title}</h3>
                            <p>
                                ￥<span class="price-1">${value.price}</span>
                                <span class="price-b">￥<span class="price-2">${value.newprice}</span></span>
                            </p>
                        </li>
                        <div class="shopping"></div>
                    </a>`;
            }
        });
        $commodityli_lists.html($strhtml);
        $commodity_seniority.html($strhtml1);
        $muin_lists.html($strhtml2)
            // $(function() { //页面加载完成
            //     $("img.lazy").lazyload({
            //         effect: "fadeIn" //显示方法：谈入
            //     });
            // });
    });


    // const $header_search_input = document.querySelector(".header_search_input");
    // const $search_lists = document.querySelector("search_lists");

    // function jsonp4(data) {
    //     let strhtml = '';
    //     for (let arr of data.result) {
    //         strhtml += `<li>${arr[0]}</li>`;
    //     }
    //     $search_lists.innerHTML = strhtml;
    // }
    // $header_search_input.on("input", function() {
    //     // let ajax=new XMLHttpRequest();
    //     $cScript = document.querySelector(".produce")
    //     if (cScript) {
    //         document.removeChild(cScript);
    //     }
    //     $script = document.createElement('script');
    //     document.body.appendChild(script);
    //     script.src = 'https://suggest.taobao.com/sug?code=utf-8&q=' + this.value + '&extras=1&area=c2c&bucketid=atb_search&pid=mm_26632258_3504122_32538762&unid=&clk1=4cddf4f853c33e3e4bf789cff50dbdae&_=1606376403337&callback=jsonp4';
    //     script.class = "produce";
    // });
    // $.ajax({
    //     url: 'http://localhost/dashboard/FengQu/php/index2.php',
    //     dataType: 'json'
    // }).done(function(data) {
    //     $strhtml = "";
    //     $.each(data, function(index, value) {
    //         $strhtml += `
    //         <a href="javascript:;">
    //         <li>
    //             <div class="li_left">
    //                 <img src="${value.url}" alt="">
    //             </div>
    //             <div class="li_right">
    //                 <h4>${value.title}</h4>
    //             </div>
    //             <p>
    //                 ￥<span class="price-1">${value.newprice}</span>
    //                 <span class="price-b">￥<span class="price-2">${value.price}</span></span>
    //             </p>
    //         </li>
    //     </a>
    //         `;
    //     })
    //     $commodity_seniority.html($strhtml);
    // })
    // $.ajax({
    //     url: "http://localhost/dashboard/FengQu/php/index_muin.php",
    //     dataType: "json"
    // }).done(function(data) {
    //     $strhtml = "";
    //     $.each(data, function(index, value) {
    //         $strhtml += `
    //         <a href="javascript:;">
    //         <li>
    //             <img src="${value.url}" alt="">
    //             <h3>${value.title}</h3>
    //             <p>
    //                 ￥<span class="price-1">${value.price}</span>
    //                 <span class="price-b">￥<span class="price-2">${value.newprice}</span></span>
    //             </p>
    //         </li>
    //     </a>
    //         `;
    //     })
    //     $muin_list.html($strhtml);
    // })
}(jQuery)