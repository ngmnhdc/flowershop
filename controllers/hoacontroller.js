const { model } = require('mongoose');
var banghoa = require('../models/hoamodel');

//------------------index.js--------------------------------//

module.exports.select = async function(loaihoa) {

    var dshoa = await banghoa.select(loaihoa);
    var kq = "<table width='100%' align='left' >";
    for (i = 0; i < dshoa.length; i++) {
        if (i % 2 == 0)
            kq = kq + "<tr>";
        kq = kq + "<td width='50%'><table width='100%'><tr>";
        kq = kq + "<td width='30%'><img class='set-img' src='/images/" + dshoa[i].hinh + "'></td><td>Tên hoa: " + dshoa[i].tenhoa + "<br>Giá bán: " + dshoa[i].giaban + "<br><br><a href='/" + dshoa[i].maloai + "/" + dshoa[i].mahoa + "'>Chi tiết</a><br><br><a href='/purchase/" + dshoa[i].mahoa + "'><i class='fas fa-shopping-cart '></i></a></td></tr></table></td>";
        if ((i + 1) % 2 == 0)
            kq = kq + "</tr>";
    }
    kq = kq + "</table";
    return kq;
}

module.exports.selectAll = async function() {
    var dshoa = await banghoa.selectAll();
    var kq = "<table width='100%' align='left' >";
    for (i = 0; i < dshoa.length; i++) {
        if (i % 2 == 0)
            kq = kq + "<tr>";
        kq = kq + "<td width='50%'><table width='100%'><tr>";
        kq = kq + "<td width='30%'><img class='set-img' src='/images/" + dshoa[i].hinh + "'></td><td>Tên hoa: " + dshoa[i].tenhoa + "<br>Giá bán: " + dshoa[i].giaban + "<br><br><a href='/" + dshoa[i].maloai + "/" + dshoa[i].mahoa + "'>Chi tiết</a><br><br><a href='/purchase/" + dshoa[i].mahoa + "'><i class='fas fa-shopping-cart '></i></a></td></tr></table></td>";
        if ((i + 1) % 2 == 0)
            kq = kq + "</tr>";
    }
    kq = kq + "</table";
    return kq;
}

module.exports.selectdetail = async function(tenbonghoa) {
    var dshoa = await banghoa.selectflowerDetail(tenbonghoa);
    var kq = "<table width='80%' align='center' >";
    for (i = 0; i < dshoa.length; i++) {
        kq = kq + "<tr>";
        kq = kq + "<td width='30%'><img class='set-img' src='/images/" + dshoa[i].hinh + "'></td><td>Tên hoa: " + dshoa[i].tenhoa + "<br>Giá bán: " + dshoa[i].giaban + "<br>Mô tả: " + dshoa[i].mota + "<br><a href='/''>Về Trang Chủ</a></td>";
        kq = kq + "</tr>";
        break;
    }
    kq = kq + "</table";
    return kq;
}
module.exports.search = async function(key) {
    var dshoa = await banghoa.search(key);
    var kq = "";
    if (dshoa.length == 0) {
        if (key != "NULL")
            kq = kq + `<div class="section__article-search-not-find">
                        <span>Không tìm thấy <b>` + key + `</span></b>
                    </div>`;
    } else {
        var kq = "<table width='80%' align='center' >";
        for (i = 0; i < dshoa.length; i++) {
            if (i % 2 == 0)
                kq = kq + "<tr>";
            kq = kq + "<td width='50%'><table width='80%'><tr>";
            kq = kq + "<td width='30%'><img class='set-img' src='/images/" + dshoa[i].hinh + "'></td><td>Tên hoa: " + dshoa[i].tenhoa + "<br>Giá bán: " + dshoa[i].giaban + "<br>Mô tả: " + dshoa[i].mota + "<br><a href='/'>Về Trang Chủ</a></td></tr></table></td>";
            if ((i + 1) % 2 == 0)
                kq = kq + "</tr>";
        }
        kq = kq + "</table";
        return kq;
    }
    return kq;
}

module.exports.selectByCode = async function(tenbonghoa) {
    var dshoa = await banghoa.selectflowerDetail(tenbonghoa)
    if (dshoa.length > 0)
        return dshoa[0];
    return "";
}

module.exports.insert = async function(hoamoi) {
    themhoa = await banghoa.insert(hoamoi);
    return themhoa;
}