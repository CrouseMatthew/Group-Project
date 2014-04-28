    <!--Use of the work return seems to be a problem and should be changed-->

    <script>
        function postContactToGoogle() {
            var name = $('#name').val();
            var contactinfo = $('#contactinfo').val();
            var positive = $('#positive').val();
            var recommend = $('#recommend').val();
            var schedule = $('#return').val();
            var comments = $('#comments').val();

                $.ajax({
                    url: "https://docs.google.com/forms/d/14N2ZEe9ZS121DlAnFiHhq42sziv9jbYvLh6sOsXeGoA/viewform",
                    data: { "entry.1959956746": name, "entry.1222223296": contactinfo, "entry.1794504132": positive, "entry.1535238702": recommend, "entry.826728451": schedule, "entry.786157567": comments },
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function () {
                            window.location.replace("ThankYou.html");
                        },
                        200: function () {
                            window.location.replace("ThankYou.html");
                        }
                    }
                });
        }
    </script>