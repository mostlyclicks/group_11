class CreateContacts < ActiveRecord::Migration

  def up
    create_table :refinery_contacts do |t|
      t.string :full_name
      t.string :email_address
      t.string :ussa_number
      t.string :discipline
      t.text :message

     t.timestamps
    end

    add_index :refinery_contacts, :id
  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "contacts"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/contacts"})
    end

    drop_table :refinery_contacts
  end

end
