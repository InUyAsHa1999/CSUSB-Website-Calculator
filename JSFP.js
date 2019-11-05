var Question_Stack_N_One = 0;
var Question_Stack_N_Two = 0;
var Operator_Stack = "";
function Change_Question()
{

}

function sayHi() {
    window.alert("Hello");
    window.confirm("sometext");
}

function Button_1_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "1";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "1";
}

function Button_2_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "2";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "2";
}

function Button_3_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "3";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "3";
}

function Button_4_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "4";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "4";
}

function Button_5_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "5";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "5";
}

function Button_6_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "6";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "6";
}

function Button_7_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "7";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "7";
}

function Button_8_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "8";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "8";
}

function Button_9_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "9";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "9";
}

function Button_0_Pressed() {

    document.getElementById("Question").innerHTML = document.getElementById("Question").innerHTML + "0";
    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "0";
}

function Button_T_Pressed() {

    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "*";
    Question_Stack_N_One = parseInt(document.getElementById("Question").innerHTML);
    Operator_Stack = "*";
    document.getElementById("Question").innerHTML = "";
}

function Button_D_Pressed() {

    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "/";
    Question_Stack_N_One = parseInt(document.getElementById("Question").innerHTML);
    Operator_Stack = "/";
    document.getElementById("Question").innerHTML = "";
}

function Button_P_Pressed() {

    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "+";
    Question_Stack_N_One = parseInt(document.getElementById("Question").innerHTML);
    Operator_Stack = "+";
    document.getElementById("Question").innerHTML = "";
}

function Button_M_Pressed() {

    document.getElementById("True_Question").innerHTML = document.getElementById("True_Question").innerHTML + "-";
    Question_Stack_N_One = parseInt(document.getElementById("Question").innerHTML);
    Operator_Stack = "-";
    document.getElementById("Question").innerHTML = "";
}

function Button_C_Pressed() {

    document.getElementById("Question").innerHTML = "";
    document.getElementById("True_Question").innerHTML = "";
}

function Button_E_Pressed()
{

    Question_Stack_N_Two = parseInt(document.getElementById("Question").innerHTML);
    document.getElementById("Question").innerHTML = "";
    if (Operator_Stack == "*") {
        document.getElementById("Question").innerHTML = (Question_Stack_N_One) * (Question_Stack_N_Two);
    }

    if (Operator_Stack == "/") {
        document.getElementById("Question").innerHTML = (Question_Stack_N_One) / (Question_Stack_N_Two);
    }

    if (Operator_Stack == "+") {
        document.getElementById("Question").innerHTML = (Question_Stack_N_One) + (Question_Stack_N_Two);
    }

    if (Operator_Stack == "-") {
        document.getElementById("Question").innerHTML = (Question_Stack_N_One) - (Question_Stack_N_Two);
    }



}
