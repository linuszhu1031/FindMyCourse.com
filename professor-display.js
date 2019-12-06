$(function() {
  $(".selectDepartmentList").on('click', 'li a', function() {
    $(".selectDepartment:first-child").text($(this).text());
    $(".selectDepartment:first-child").val($(this).text());
  });
});

$(function() {
  $(".selectAreaList").on('click', 'li a', function() {
    $(".selectArea:first-child").text($(this).text());
    $(".selectArea:first-child").val($(this).text());
  });
});

$(function() {
  $("#cs").click(function() {
    $("#fleck").show();
    $("#green").hide();
    $("#huang").hide();
    $("#lazebnik").show();
    $("#smaragdis").show();
  });
});

$(function() {
  $("#cs").click(function() {
    $("#ai").click(function() {
      $("#fleck").show();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").show();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#cs").click(function() {
    $("#compv").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").show();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#cs").click(function() {
    $("#corp-fin").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#cs").click(function() {
    $("#sig").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").show();
    });
  });
});

$(function() {
  $("#cs").click(function() {
    $("#ling").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#ece").click(function() {
    $("#fleck").hide();
    $("#green").hide();
    $("#huang").show();
    $("#lazebnik").hide();
    $("#smaragdis").show();
  });
});

$(function() {
  $("#ece").click(function() {
    $("#ai").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").show();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#ece").click(function() {
    $("#compv").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").show();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#ece").click(function() {
    $("#sig").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").show();
    });
  });
});

$(function() {
  $("#ece").click(function() {
    $("#corp-fin").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#ece").click(function() {
    $("#ling").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#fin").click(function() {
    $("#fleck").hide();
    $("#green").hide();
    $("#huang").hide();
    $("#lazebnik").hide();
    $("#smaragdis").hide();
  });
});

$(function() {
  $("#ling").click(function() {
    $("#fleck").hide();
    $("#green").show();
    $("#huang").hide();
    $("#lazebnik").hide();
    $("#smaragdis").hide();
  });
});

$(function() {
  $("#ling").click(function() {
    $("#neuro").click(function() {
      $("#fleck").hide();
      $("#green").show();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#ling").click(function() {
    $("#ai").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#ling").click(function() {
    $("#compv").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#ling").click(function() {
    $("#corp-fin").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#ling").click(function() {
    $("#sig").click(function() {
      $("#fleck").hide();
      $("#green").hide();
      $("#huang").hide();
      $("#lazebnik").hide();
      $("#smaragdis").hide();
    });
  });
});

$(function() {
  $("#yid").click(function() {
    $("#fleck").hide();
    $("#green").hide();
    $("#huang").hide();
    $("#lazebnik").hide();
    $("#smaragdis").hide();
  });
});
