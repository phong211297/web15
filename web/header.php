<html>
    <head>
    <title>Quan ly admin</title>
    <style type="text/css">
          #header li{
              float:left;
              padding :5px 10px;
              border : solid 1px blue;
              background: blue;
              margin-right: 10px;
              list-style:none;
          }
          #header{
              overflow : hidden;
          }
          #header li a{
              color: #fff;
              text - decoration : none;
          }
          #header div{
              float: right;
              width: 250px;
              line-height: 50px;
          }
          #header ul{
              width: 700px;
              float: left;             
          }
          body{
              background:#acacac;
              margin: 0px;
              padding: 0px;
          }
          #container{
              width: 1000px;
              margin: 0px auto;
              overflow: hidden;
              background: #fff;
          }
          #content{
              border-top: solid 1px #ddd;
              min-height: 600px;
              padding: 10px 30px;
          }
          .button {
              display: inline-block;
              padding: 5px 10px;
              background: blue;
              color: #fff;
              text-decoration: none;
              margin-top: 10px;
          }
    </style>
    </head>
    <body>
       <div id="container">
           <div id="header">
                <ul>
                    <li><a href="#">User</a></li>
                    <li><a href="#">Tin tuc</a></li>
                    <li><a href="#">Binh luan</a></li>  
                </ul>
                <div>
                Xin chao !<?php  echo get_current_username(); ?>
                <a href="<?php echo base_url('?m=common&action=logout')?>">Log Out</a>
                </div>
            </div>
            <div id="content">
</html>