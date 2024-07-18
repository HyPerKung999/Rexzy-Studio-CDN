$(document).ready(function () {
  $('#table_list').DataTable({
    columnDefs: [
      { targets: '_all', visible: true }
    ],
    language: {
      'paginate': {
        'previous': '<i class="fa fa-chevron-left"></i>',
        'next': '<i class="fa fa-chevron-right"></i>'
      },
      "decimal": "",
      "emptyTable": '<span class="text-main">ไม่พบข้อมูล</span>',
      "info": '<span class="text-main">แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ</span>',
      "infoEmpty": '<span class="text-main">แสดง 0 ถึง 0 จาก 0 รายการ</span>',
      "infoFiltered": '<span class="text-main">(ทั้งหมด _MAX_ รายการ)</span>',
      "infoPostFix": "",
      "thousands": ",",
      "lengthMenu": '<span class="text-main">แสดง _MENU_ รายการ</span>',
      "loadingRecords": '<span class="text-main">โหลดข้อมูล...</span>',
      "processing": "",
      "search": '<span class="text-main">ค้นหา</span>',
      "zeroRecords": '<span class="text-main">ไม่พบข้อมูลที่ตรงกัน...</span>',
      "paginate": {
        "first": '<span class="btn-main-text">หน้าแรก</span>',
        "last": '<span class="btn-main-text">หน้าสุดท้าย</span>',
        "next": '<span class="btn-main-text">ถัดไป</span>',
        "previous": '<span class="btn-main-text">ย้อนกลับ</span>'
      },
      "aria": {
        "sortAscending": ": เรียงจากน้อยไปมาก",
        "sortDescending": ": เรียงจากมากไปน้อย"
      },
      //customize number of elements to be displayed
      "lengthMenu": '<span class="text-main">แสดง&nbsp;&nbsp;&nbsp;<select class="form-control input-sm" style="border-radius: 1vh;">' +
        '<option class="text-center" value="10">10</option>' +
        '<option class="text-center" value="20">20</option>' +
        '<option class="text-center" value="30">30</option>' +
        '<option class="text-center" value="40">40</option>' +
        '<option class="text-center" value="50">50</option>' +
        '<option class="text-center" value="100">100</option>' +
        '<option class="text-center" value="-1">ทั้งหมด</option>' +
        '</select>&nbsp;&nbsp;&nbsp;ลำดับ</span>'
    },
  })
});


