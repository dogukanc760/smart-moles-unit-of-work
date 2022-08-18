export const guide = [
  {
    title: 'Manuel Kurulum Rehberi',
    altTitle:
      'Bu rehber size kurulumu nasıl yapmanız gerektiğini gösterir(sadece api entegrasyonu için)',
    description:
      'Installation endpointine istek atarken number tipinde step numarası ve ilgili adım için gerekli dto tipini geçmeniz gerekmektedir. Tek bir seferde yanlızca 1 adım geçerlidir. Aynı anda 2 adım gerçekleştirmeye çalışmayın. Çünkü adımlar birbirine zincir olarak bağlıdır sırasıyla işlem sonucu dönen verileri kullanılarak yapılması gerekmektedir.',
    content: `
    STEP 1: KULLANICI KAYIT İŞLEMİ USERDTO BEKLER ADIM NUMARASI 1,
    STEP 2: KULLANICI KONTRAKT TİP TANIMI CONTRACTTYPEDTO BEKLER ADIM NUMARASI 2,
    STEP 3: KULLANICI KONTRAKT TANIMI USERCONTRACTDTO BEKLER ADIM NUMARASI 3,
    STEP 4: KULLANICI ABONELIK SOZLESMESİ TANIMI SUBRCRIPTIONDTO BEKLER ADIM NUMARASI 4,
    STEP 5: KULLANICI SİMKART TANIMI SIMCARDDTO BEKLER ADIM NUMARASI 5,
    STEP 6: KULLANICI MODEM IMEI TANIMI MODEMIMEIDTO BEKLER ADIM NUMARASI 6,
    STEP 8: KULLANICI GATEWAY TANIMI GATEWAYDTO BEKLER ADIM NUMARASI 8,
    STEP 9: KULLANICI GATEWAYFIELD TANIMI GATEWAYFIELDDTO BEKLER ADIM NUMARASI 9,
    STEP 10: KULLANICI WORKGROUP TANIMI WORKGROUPDTO BEKLER ADIM NUMARASI 10,
    STEP 11: KULLANICI SENSORCARD TANIMI SENSORCARDDTO BEKLER ADIM NUMARASI 11,
    STEP 12: KULLANICI POMPA TANIMI PUMPCARDDTO BEKLER ADIM NUMARASI 12,
    STEP 13: KULLANICI VANA KARTI TANIMI VALVECARDDTO BEKLER ADIM NUMARASI 13,
    `,
    warning: 'BU ADIM NUMARALARI DIŞINDA GÖNDERİLEN HER STEP HATA VERECEKTİR.!'
  },
];
