class AddRequestedSponsorshipToRefineryRegistrations < ActiveRecord::Migration[5.1]
  def change
  	add_column  :refinery_registrations, :sponsorship_brand, :string
  	add_column	:refinery_registrations, :notes, :text
  end
end
