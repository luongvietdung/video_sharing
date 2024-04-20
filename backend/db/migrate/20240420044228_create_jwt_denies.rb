class CreateJwtDenies < ActiveRecord::Migration[7.1]
  def change
    create_table :jwt_denies do |t|
      t.string :jti, null: false
      t.datetime :exp, null: false

    end

    add_index :jwt_denies, :jti
  end
end
