module ApplicationHelper

	def logo
		image_tag("Logo_GROUPE_2016.png")
	end

	def logo_picker(page)
		if page_title == "Home" || page_title == "Sponsorship Request"
			link_to (image_tag "Logo_GROUPE_2016.png", class: "navbar-brand",alt: "Group Athlete", width: "200"), refinery.root_path
		elsif page.title == "Rossignol" || page.root.title == "Rossignol"
		 	 link_to (image_tag "Rossignol_Line_RED.png", class: "navbar-brand",alt: "Group Athlete / Rossignol", width: "200"), "/rossignol"
		elsif page.title == "DLLK" || page.root.title == "DLLK"
			 link_to (image_tag "LOGO_DYNASTAR_HORIZONTAL.png", class: "navbar-brand",alt: "Group Athlete / DLLK", width: "150"), "/dllk"
		end
	end

	def menu_picker(page_title, parent_id, page_root_id)
		if page_title == "Home2" || page_title == "Sponsorship Request"
			main_menu = Refinery::Pages::MenuPresenter.new(refinery_menu_pages, self)
	    main_menu.menu_role = 'navigation'
	    main_menu.menu_tag = "div"
	    main_menu.css =  "collapse navbar-collapse"
	    main_menu.dom_id = "navbarSupportedContent"
	    main_menu.list_tag = "ul"
	    main_menu.list_tag_css = "nav navbar-nav ml-auto"
	    main_menu.list_item_tag = "li class=\"nav-item\""
	    main_menu.selected_css = "active"
	    main_menu.max_depth = 0
	    main_menu.to_html
		elsif page_title == page_title || page_root_id == parent_id
			sub_menu = Refinery::Menu.new(refinery_menu_pages.select{ |item| item.parent_id == page_root_id })
			sub_menu = Refinery::Pages::MenuPresenter.new(sub_menu, self)
			sub_menu.menu_role = 'navigation'
		  sub_menu.menu_tag = "div"
		  sub_menu.css =  "collapse navbar-collapse"
		  sub_menu.dom_id = "navbarSupportedContent"
		  sub_menu.list_tag = "ul"
		  sub_menu.list_tag_css = "nav navbar-nav ml-auto"
		  sub_menu.list_item_tag = "li class=\"nav-item\""
		  sub_menu.selected_css = "active"
		  sub_menu.max_depth = 0
		  sub_menu.to_html
		end
	end


	def sub_nav(page_title, parent_id, current_page_id)
		sub_nav = Refinery::Menu.new(refinery_menu_pages.select{ |item| item.parent_id == current_page_id })
		sub_nav = Refinery::Pages::MenuPresenter.new(sub_nav, self)
		sub_nav.menu_role = 'navigation'
	  sub_nav.menu_tag = "div"
	  sub_nav.css =  ""
	  # sub_nav.dom_id = "navbarSupportedContent"
	  sub_nav.list_tag = "ul"
	  sub_nav.list_tag_css = "nav flex-column"
	  sub_nav.list_item_tag = "li class=\"nav-item\""
	  sub_nav.selected_css = "active"
	  sub_nav.max_depth = 0
	  sub_nav.to_html
	end


end
