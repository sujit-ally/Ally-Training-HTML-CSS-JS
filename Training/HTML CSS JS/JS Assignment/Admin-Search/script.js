// var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

$(".data-row").click(function () {
    // for active row
    $(this).addClass("active").siblings().removeClass("active");
  
    // fetching data from selected row
    let id = $(this).find(".column1").text()
    let firstName= $(this).find(".column2").text()
    let lastName = $(this).find(".column3").text()
    let email= $(this).find(".column4").text()
    let phone = $(this).find(".column5").text()

    $("#info-content").html(
        `<div><b>User selected:</b> ${firstName} ${lastName}</div>
        <br/>  
        <div>
            <b>Email: </b>
            <br/>
            <textarea cols="60" rows="1" readonly>
                        ${email}
                    </textarea
            >
          </div>
          <br/>
          <div>
          <b>Phone:</b> ${phone}</div>`
    )
    console.log()

});

