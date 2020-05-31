function postToGoogle() {
                var entrynum = $("#entrynum").val();
                var password = $("#password").val();
                var heading = $("#heading").val();
                var content = $("#content").val();
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSeYoS9fxPv-u0UhbLXOuTVNrnFLHblqGIbuGO26TaN0VIFTcQ/formResponse?",
          data: {"entry.2033247281": entrynum, "entry.611900264": password, "entry.321221018": heading, "entry.79736556":content},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
              alert("Your blog has been submitted for approval and will be posted in next 1 working hour.")
              window.open("index.html", "_top");
            }
                });
        return false;
            }