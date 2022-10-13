class AddLikeTophoto < ActiveRecord::Migration[7.0]
  def change
    add_column :photos, :likes, :integer, null: false, default: 0
  end
end
