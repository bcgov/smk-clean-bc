'''
take GeoJSON data and create subsets for 
different values of a given attribute
'''
#%%
import os
import geopandas

geojson_in = os.path.join("..", "layers", "evcs-stalls.geojson")
data = geopandas.read_file(geojson_in)
outdir = os.path.dirname(geojson_in)

geojson_base = os.path.splitext(os.path.basename(geojson_in))[0]

# choose the attribute to subset by
col = "Stall_Type"
# %%
for val in getattr(data, col).unique():
    out = data[getattr(data, col)==val]
    out.to_file(os.path.join(outdir, geojson_base+"_"+val+".geojson"), driver="GeoJSON")