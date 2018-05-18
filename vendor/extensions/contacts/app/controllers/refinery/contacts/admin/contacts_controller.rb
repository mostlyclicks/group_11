module Refinery
  module Contacts
    module Admin
      class ContactsController < Refinery::AdminController

        crudify :'refinery/contacts/contact', 
                :title_attribute => "full_name", 
                :order => "created_at DESC"

        def index
          if searching?
            search_all_contacts
          else
            find_all_contacts
          end

          @grouped_contacts = group_by_date(@contacts)
        end


        private

        # Only allow a trusted parameter "white list" through.
        def contact_params
          params.require(:contact).permit(:full_name, :email_address, :ussa_number, :discipline, :message)
        end
      end
    end
  end
end
