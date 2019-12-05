// $('#filtering').multiselect({
//     nonSelectedText: 'Select a food...',
//     enableFiltering: true,
//     templates: {
//         li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>',
//         filter: '<li class="multiselect-item filter"><div class="input-group m-0 mb-1"><input class="form-control multiselect-search" type="text"></div></li>',
//         filterClearBtn: '<div class="input-group-append"><button class="btn btn btn-outline-secondary multiselect-clear-filter" type="button"><i class="fa fa-close"></i></button></div>'
//     },
//     selectedClass: 'bg-light',
//     onInitialized: function(select, container) {
//         // hide checkboxes
//         container.find('input[type=checkbox]').addClass('d-none');
//     }
// });






$(document).ready(function() {     
    $('#filtering').multiselect({
        buttonWidth: '400px',
        nonSelectedText: 'Select Courses',
        enableFiltering: true,
        templates: {
            li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>',
            filter: '<li class="multiselect-item filter"><div class="input-group m-0 mb-1"><input class="form-control multiselect-search" type="text"></div></li>',
            filterClearBtn: '<span class="input-group-btn"><button type="button" class="btn btn-secondary multiselect-clear-filter">&times;</button></span>'
        },
        selectedClass: 'bg-light',
        
        onInitialized: function(select, container) {

        }, 

        onChange: function($option) {
            // Check if the filter was used.
            var query = $('#filtering li.multiselect-filter input').val();
            
            // input = document.getElementById("filtering");
            // filter = input.value.toUpperCase();
            // table = document.getElementById("courseLook");
            // li = table.getElementsByTagName("li");

            
            // console.log(this.value )
            // console.log(filter)

            


            if (query) {
                print(query)
                $('#filtering li.multiselect-filter input').val('').trigger('keydown');
            }

            
        },

        // onDropdownHide: function() {
        //     ('.select').val('').focus().blur();
        //  }
        
    });   

    $('#department').multiselect({
        buttonWidth: '400px',
        nonSelectedText: 'Select Department',
        enableFiltering: true,
        templates: {
            li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>',
            filter: '<li class="multiselect-item filter"><div class="input-group m-0 mb-1"><input class="form-control multiselect-search" type="text"></div></li>',
            filterClearBtn: '<span class="input-group-btn"><button type="button" class="btn btn-secondary multiselect-clear-filter">&times;</button></span>'
        },
        selectedClass: 'bg-light',
        
        onInitialized: function(select, container) {
        },

    });


    $('#basic').multiselect({
        buttonWidth: '400px',
        templates: {
            li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>'
        }
    });

});

$(document).ready(function() {
    $('#example-clear-after-filter-selection').multiselect({
        buttonContainer: '',
        enableFiltering: true,
        onChange: function($option) {
            // Check if the filter was used.
            var query = $('#example-clear-after-filter-selection-container li.multiselect-filter input').val();

            if (query) {
                $('#example-clear-after-filter-selection-container li.multiselect-filter input').val('').trigger('keydown');
            }
        }
    });
});




// $('.multiselect').multiselect({
//     buttonWidth: '500px',
//     nonSelectedText: "Select Courses"
// });   