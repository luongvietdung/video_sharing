class CreateVideos < ActiveRecord::Migration[7.1]
  def change
    create_table :videos do |t|

      t.string :src, null: false
      t.string :title
      t.text :description

      t.timestamps null: false
    end
  end
end
