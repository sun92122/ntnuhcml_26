<template>
  <div class="done">
    <br />
    <h3>感謝您填寫竹苗週預購表單</h3>
    <p>確認信已寄送至您填寫的信箱<br />如有任何疑問請洽竹苗週粉專</p>
    <table
      class="social_block block-3"
      width="100%"
      border="0"
      cellpadding="10"
      cellspacing="0"
      role="presentation"
      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
    >
      <tr>
        <td class="pad">
          <div class="alignment" align="center">
            <table
              class="social-table"
              width="108px"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                display: inline-block;
              "
            >
              <tr>
                <td style="padding: 0 2px 0 2px">
                  <a
                    href="https://www.facebook.com/ntnuhcmlfood"
                    target="_blank"
                    ><img
                      src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png"
                      width="32"
                      height="32"
                      alt="Facebook"
                      title="facebook"
                      style="display: block; height: auto; border: 0"
                  /></a>
                </td>
                <td style="padding: 0 2px 0 2px">
                  <a href="https://www.instagram.com/hcmlweek/" target="_blank"
                    ><img
                      src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png"
                      width="32"
                      height="32"
                      alt="Instagram"
                      title="instagram"
                      style="display: block; height: auto; border: 0"
                  /></a>
                </td>
                <td style="padding: 0 2px 0 2px">
                  <a href="https://hcml.ntnu.cf/" target="_blank"
                    ><img
                      src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/website@2x.png"
                      width="32"
                      height="32"
                      alt="2023竹苗週預購表單"
                      title="訂購表單"
                      style="display: block; height: auto; border: 0"
                  /></a>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DoneView",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.iframe {
  display: none;
}
.done {
  float: left;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  min-height: 70vh;
  position: relative;
  z-index: 100;
  background: #f8fce3;

  @media only screen and (min-width: 660px) {
    min-height: calc(100vh - 500px);
  }
}
body {
  margin: 0;
  padding: 0;
}

a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: inherit !important;
}

#MessageViewBody a {
  color: inherit;
  text-decoration: none;
}

p {
  line-height: inherit;
}

.desktop_hide,
.desktop_hide table {
  mso-hide: all;
  display: none;
  max-height: 0px;
  overflow: hidden;
}

.image_block img + div {
  display: none;
}

@media (max-width: 520px) {
  .desktop_hide table.icons-inner {
    display: inline-block !important;
  }

  .icons-inner {
    text-align: center;
  }

  .icons-inner td {
    margin: 0 auto;
  }

  .row-content {
    width: 100% !important;
  }

  .mobile_hide {
    display: none;
  }

  .stack .column {
    width: 100%;
    display: block;
  }

  .mobile_hide {
    min-height: 0;
    max-height: 0;
    max-width: 0;
    overflow: hidden;
    font-size: 0px;
  }

  .desktop_hide,
  .desktop_hide table {
    display: table !important;
    max-height: none !important;
  }
}
</style>
