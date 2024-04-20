class CreateVotes < ActiveRecord::Migration[7.1]
  def change
    create_table :votes do |t|

      t.references :user, foreign_key: true, null: false
      t.references :video, foreign_key: true, null: false
    end
    add_index :votes, [:user_id, :video_id], unique: true
  end
end
