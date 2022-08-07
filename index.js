// TODO: 使用者可以新增待辦事項
const addNewTodo = () => {
    //1.取得使用者輸入的值
    const value = $('#todo').val();
  
    if (!value) {
      alert('請填寫資料')
      return
    }
  
    //2. 取得使用者填寫的值
    
    $('.todolist__item').append(`<li class="no-completed">
      <input class="todolist__input" type="checkbox" />
      <span>${value}</span>
      <a class="delete" href="#">
        <i class="fa fa-x"></i>
      </a>
      </li>`)
  
    //3.清除代辦
      $('#todo').val('');
  
      $('.todolist__item li').on('click', 'input', (e) => {
        console.log("inpress");
        // 步驟二：每條待辦事項根據條件，加上不同的 class：completed, no-complete
        const li = $(e.target).parent()
    
        if (li.hasClass('completed')) {
          li.removeClass('completed')
          li.addClass('no-completed')
          console.log("add no-comp")
        } else {
          li.removeClass('no-completed')
          li.addClass('completed')
          console.log("add comp")
        }
        // 步驟三：更新已完成項目的數字
        const count = $('.todolist__item').find('.completed').length
        $('.todolist__info').find('a').text(count)
        console.log(count);
      })
  
  }
  
  // TODO: 使用者可以刪除待辦事項
  const deleteTodo = (e) => {
    //console.log(e);
    $(e.target).parent().closest('li').remove();
  }
  
  // TODO: 清除已完成項目
  const clearCompletedTodo = () => {
  
    $('.todolist__item').find('.completed').fadeOut(500, () => {
      // 找到 completed 的待辦事項，並移除 .completed class
      $('.todolist__item').find('.completed').remove();
  
      // 更新已完成項目
      // 抓出 .todolist__item 待辦事項的 .completed class 數量
      // 用 jQuery text() 方式更新 html 已完成 [數字] 項目
      const count = $('.todolist__item').find('.completed').length;
      $('.todolist__info').find('a').text(count);
  
    })
  }
  
  
  // 監聽
  $(() => {
    // TODO: 每一條代辦事項 delete 監聽 click 事件
    $('.todolist__item').on('click', '.delete', (e) => deleteTodo(e))
  
    // TODO: 使用者可以將待辦事項設定成已完成
    // 步驟一：監聽每一個 todo list，前面 checkbox 有被點擊時執行 Function
    $('.todolist__item li').on('click', 'input', (e) => {
      console.log("inpress");
      // 步驟二：每條待辦事項根據條件，加上不同的 class：completed, no-complete
      const li = $(e.target).parent()
  
      if (li.hasClass('completed')) {
        li.removeClass('completed')
        li.addClass('no-completed')
        console.log("add no-comp")
      } else {
        li.removeClass('no-completed')
        li.addClass('completed')
        console.log("add comp")
      }
      // 步驟三：更新已完成項目的數字
      const count = $('.todolist__item').find('.completed').length
      $('.todolist__info').find('a').text(count)
      console.log(count);
    })
    
    // 篩選全部
    $('.todolist__tabs').on('click', '.all', () => {
      $('.todolist__item').children().show();
      console.log("add");
    })
  
    // TODO: 篩選待完成
    $('.todolist__tabs').on('click', '.no-completed', () => {
      $('.todolist__item').find('.completed').hide()
      $('.todolist__item').find('.no-completed').show()
      console.log("no-completed");
    })
  
    // TODO: 篩選已完成
    $('.todolist__tabs').on('click', '.completed', () => {
      $('.todolist__item').find('.completed').show()
      $('.todolist__item').find('.no-completed').hide()
      console.log("completed");
    })
  
  })
