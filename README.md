# MaterialStyleCalendarCSS
Alter the CSS of jQuery datepicker to get the Material look simplistic.

You don't need heavy plugins to get the material look and feel for a datepicker. It can be done by overriding simple CSS of the renderedjQuery datepicker.

Just include the jquery, jquery ui files and then you are good to go with following code snippet:

1. Adjust the outer layout of the datepicker by removing unnecessary border and padding:
.ui-widget.ui-widget-content {
    border: none;
    border-radius: 0;
    padding: 0;
}

.ui-datepicker {
    width: 100% !important;
    padding: .2em .2em 0;
    display: none;
}
2. Change the layout of the header which contains the month name and navigational arrows:
.ui-datepicker .ui-datepicker-header {
        padding: 3% 0;
        border: none;
        border-radius: 0;
        background-color: #F44336;
        color: white;
        font-weight: normal;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

.ui-datepicker th {
        text-align: center;
        font-weight: bold;
        border: 0;
        padding: 5%;
    }
3. Remove borders and background color from dates to give flat layout to dates.
.ui-datepicker-calendar > tbody > tr > td > a.ui-state-default {
    border: none !important;
    background: white !important;
    font-weight: normal !important;
    color: #454545 !important;
    background: white !important;
    border: none !important;
    text-align: center !important;
    padding: 30% !important;
}

.ui-datepicker-calendar > tbody > tr > td > a.ui-state-active {
    border: none !important;
    background: #448AFF !important;
    color: white !important;
    border-radius: 100% !important;
}
4. Finally change the arrows to the arrow of your choice.
.ui-icon {
    width: 35px;
    height: 35px;
}

.ui-datepicker-prev span {
    background-image: url('../images/leftArrow.png') !important;
    background-position: 0px 0px !important;
}

.ui-datepicker-next span {
    background-image: url('../images/rightArrow.png') !important;
    background-position: 0px 0px !important;
    margin-left: -23px !important;
}

.ui-datepicker-prev-hover, .ui-datepicker-next-hover {
    background: transparent !important;
    border: none !important;
}

That's it.. Now you can provide different colors, ripples, box shadow and play with different combinations.
