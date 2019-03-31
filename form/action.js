function make_element(i, str1, str2){
    var give_name = document.getElementById("main-form");
    var main_grp = document.createElement('div');
    main_grp.setAttribute('class', 'form-group part-input');
    var main_label = document.createElement('label');
    main_label.setAttribute('for', str2+i);
    main_label.innerHTML = str1;
    var text_field = document.createElement('input');
    text_field.setAttribute('type', 'text');
    text_field.setAttribute('id', str2+i);
    text_field.setAttribute('class', 'form-control');
    if(i == 1 | str2 == "name-tag")text_field.setAttribute('required', '');
    main_grp.appendChild(main_label);
    main_grp.appendChild(text_field);
    give_name.appendChild(main_grp);
}
function make_more_elements(){
    $('.btn').remove();
    $('.part-input').remove();
    var num = $('#part_no').val();
    for(i = 1; i <= num; i++){
        make_element(i, "Name", "name-tag", "name-input");
        make_element(i,"Phone No", "phone-tag", "ph-input");
    }
    make_button();
}
function make_button(){
    $('.btn').remove();
    var give_name = document.getElementById("main-form");
    var new_btn = document.createElement('button');
    new_btn.setAttribute('class', 'btn btn-primary');
    new_btn.setAttribute('type', 'submit');
    new_btn.innerHTML = "Submit";
    give_name.appendChild(new_btn);
}
function giveoption(){
    var name_eve = $('#event_name').val();
    var num_list = document.getElementById('part_no');
    if(name_eve == "Sketching"){
        while(num_list.firstChild){
            num_list.removeChild(num_list.firstChild);
        }
        for(i = 1; i <= 4; i++){
            var opt = document.createElement("option");
            opt.setAttribute('value', i);
            opt.innerHTML= i;
            num_list.appendChild(opt);
        }
        $('.part-input').remove();
        make_element(1, "Name", "name-tag");
        make_element(1, "Phone No", "phone-tag");
        make_button();
    }
    else if(name_eve == "Stone Painting"){
        while(num_list.firstChild){
            num_list.removeChild(num_list.firstChild);
        }
        for(i = 1; i <= 3; i++){
            var opt = document.createElement("option");
            opt.setAttribute('value', i);
            opt.innerHTML= i;
            num_list.appendChild(opt);
        }
        $('.part-input').remove();
        make_element(1, "Name", "name-tag");
        make_element(1, "Phone No", "phone-tag");
        make_button();
    }
    else if(name_eve == "Sketching"){
        while(num_list.firstChild){
            num_list.removeChild(num_list.firstChild);
        }
        for(i = 1; i <= 2; i++){
            var opt = document.createElement("option");
            opt.setAttribute('value', i);
            opt.innerHTML= i;
            num_list.appendChild(opt);
        }
        $('.part-input').remove();
        make_element(1, "Name", "name-tag");
        make_element(1, "Phone No", "phone-tag");
        make_button();
    }
    else if(name_eve == "Acrylic Painting"){
        while(num_list.firstChild){
            num_list.removeChild(num_list.firstChild);
        }
        for(i = 1; i <= 4; i++){
            var opt = document.createElement("option");
            opt.setAttribute('value', i);
            opt.innerHTML= i;
            num_list.appendChild(opt);
        }
        $('.part-input').remove();
        make_element(1, "Name", "name-tag");
        make_element(1, "Phone No", "phone-tag");
        make_button();
    }
};
function show_name_ph(){
    make_more_elements();
}