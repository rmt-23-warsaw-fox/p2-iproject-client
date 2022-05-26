<script>
import SearchComp from '../components/SearchComp.vue'
import RoomList from '../components/RoomListComp.vue'

export default {
  name: "HomeView",
  components: {
      SearchComp,
      RoomList
  }
};
</script>

<template>
  <div>
    <div id="demo" class="carousel slide banner-carousel" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://s7d2.scene7.com/is/image/ritzcarlton/jktrz-king-room-50682999?$XlargeViewport100pct$"
            class="d-block w-100"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/41/06/4106380_v2.jpeg"
            class="d-block w-100"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://s7d2.scene7.com/is/image/ritzcarlton/Club%20Lounge-7?$XlargeViewport100pct$"
            alt="New York"
            class="d-block w-100"
          />
        </div>
      </div>
    </div>

    <div class="container">
      
        <SearchComp />
        <RoomList>
          <h3>Accomodations List Available</h3>
        </RoomList>

      <div class="information bg-white mt-4 shadow">
        <div class="d-flex">
          <div class="information-left-1">
            <img
              src="https://asset.travelio.com/asset/desktop/images/new-design/SEO/seo4.png"
            />
          </div>
          <div class="information-right">
            <h3 class="mb-3">3 Keuntungan Tinggal di Apartement</h3>

            <ul class="information-text">
              <li><i class="far fa-check-circle"></i> Lokasi strategis</li>
              <li>
                <i class="far fa-check-circle"></i> Akses mudah ke transportasi
                publik
              </li>
              <li>
                <i class="far fa-check-circle"></i> Fasilitas eksklusif untuk
                gaya hidup berkualitas
              </li>
            </ul>

            <p class="information-text">
              Berlokasi strategis, Anda bisa mengakses apartemen dengan lebih
              mudah. Beberapa apartemen juga terintegrasi dengan pilihan
              transportasi publik seperti Commuter Line, Bus TransJakarta, MRT
              hingga LRT. Hal ini akan memudahkan Anda untuk bepergian meski
              tanpa kendaraan pribadi. Selain itu, apartemen menyediakan
              fasilitas untuk meningkatkan kualitas gaya hidup Anda. Di
              antaranya adalah keamanan 24 jam, minimarket, jogging track, area
              bermain anak, kolam renang, gym, lapangan basket, lapangan tenis,
              hingga sauna. Kelebihan lain tinggal di apartemen, yaitu Anda bisa
              menikmati pemandangan kota dari ketinggian.
            </p>
          </div>
        </div>
      </div>

      <div class="information bg-white mt-4 shadow">
        <div class="d-flex">
          <div class="information-right">
            <h3 class="mb-3">Kenapa Harus Pilih Apartemen By Rent Room?</h3>

            <ul class="information-text">
              <li>
                <i class="far fa-check-circle"></i> Beragam pilihan unit fully
                furnished dan unfurnished
              </li>
              <li>
                <i class="far fa-check-circle"></i> Fasilitas unit lengkap
              </li>
              <li>
                <i class="far fa-check-circle"></i> Bisa sewa harian, bulanan
                dan tahunan
              </li>
              <li>
                <i class="far fa-check-circle"></i> Tersedia dalam 3 tipe kelas:
                standard, deluxe, premium
              </li>
              <li>
                <i class="far fa-check-circle"></i> Cicil tanpa kartu kredit
              </li>
            </ul>

            <p class="information-text">
              Rent Room menyediakan tipe fully furnished dengan fasilitas
              lengkap dan unfurnished dengan harga terjangkau. Unit apartemen By
              Rent Room juga dikelola oleh tim profesional di bidang
              hospitality. Selain itu, Anda bisa sewa harian bulanan dan
              tahunan. Ada 3 pilihan tipe kelas yang bisa Anda pilih sesuai
              kebutuhan Anda, yaitu, standard, deluxe dan premium.
            </p>
          </div>
          <div class="information-left-2">
            <img
              src="https://asset.travelio.com/asset/desktop/images/new-design/SEO/seo5.png"
            />
          </div>
        </div>
      </div>

      <div class="information bg-white mt-4 mb-5 shadow">
        <div class="d-flex">
          <div class="information-left-1">
            <img
              src="https://asset.travelio.com/asset/desktop/images/new-design/SEO/seo6.png"
            />
          </div>
          <div class="information-right">
            <h3 class="mb-3">
              Keuntungan Sewa Apartemen Harian, Bulanan dan Tahunan di Rent Room
            </h3>

            <ul class="information-text">
              <li><i class="far fa-check-circle"></i> Lokasi strategis</li>
              <li>
                <i class="far fa-check-circle"></i> Akses mudah ke transportasi
                publik
              </li>
              <li>
                <i class="far fa-check-circle"></i> Fasilitas eksklusif untuk
                gaya hidup berkualitas
              </li>
            </ul>

            <p class="information-text">
              Berikut keuntungan jika anda sewa harian unit apartemen di Rent
              Room : Unit yang kami kelola sudah di standarisasi dan dilengkapi
              dengan amenities, linen dengan kualitas berbintang, wifi dan sudah
              lengkap dengan furniture seperti AC, TV, alat dapur dan makan.
              Harganya juga sangat bersaing dengan yang lain. Untuk yang menyewa
              bulanan dan tahunan di Rent Room unit juga sudah di standarisasi,
              full furnished dan sudah lengkap dengan peralatan dapur. Jika
              menyewa lebih dari sebulan, Anda dapat membayarnya per bulan. Dan
              jika Anda menyewa tahunan, Anda dapat memanfaatkan fasilitas
              cicilan bayar TANPA menggunakan kartu kredit. Adapun juga kami
              berikan opsi untuk sewa apartemen berikut tanpa atau menggunakan
              sprei dan jasa pembersihan.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
